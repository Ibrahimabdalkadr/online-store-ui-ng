import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';

function tryPraseJson<T = any>(str: string): { success: boolean; result?: T } {
    try {
        return { success: true, result: JSON.parse(str) };
    } catch {
        return { success: false };
    }
}

async function httpGET<R = any>(url: string, headers?: Record<string, string>): Promise<R> {
    const response = await fetch(url, { headers });
    const text = await response.text();
    const parseResult = tryPraseJson(text);
    const result = parseResult.success ? parseResult.result : null;
    const status = `${response.status}`;
    if (status.length == 3 && status.startsWith('2')) {
        return result;
    } else {
        throw { code: response.status, ...result };
    }
}
async function httpPAYLOAD<R = any>(url: string, body: any, headers?: Record<string, string>, method = 'POST'): Promise<R> {
    headers = { ...headers, 'Content-Type': 'application/json;charset=UTF-8' };
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
    });
    const text = await response.text();
    const parseResult = tryPraseJson(text);
    const result = parseResult.success ? parseResult.result : null;
    const status = `${response.status}`;
    if (status.length == 3 && status.startsWith('2')) {
        return result;
    } else {
        throw { code: response.status, ...result };
    }
}

export type ApiResponse<R> =
    | {
        error: false;
        data: R;
        message: 'success';
    }
    | {
        error: true;
        message: string;
        data: any;
    };

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
        this.init();
    }

    private _user$ = new BehaviorSubject<any>(null);
    private _token$ = new BehaviorSubject<string>('');

    get user(): any {
        return this._user$.value;
    }
    set user(u: any) {
        this._user$.next(u);
    }

    get token(): any {
        return this._token$.value;
    }
    set token(t: any) {
        this._token$.next(t);
    }

    user$: Observable<any> = this._user$.asObservable();
    token$: Observable<any> = this._token$.asObservable();

    init() {
        const token = localStorage.getItem('access-token');
        if (!token) return
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        this.token = token;
        this.user = user;

    }

    async login(email: string, password: string) {
        const result = await this.httpPOST<any>(`login`, { email, password });
        this.token = result.token;
        this.user = result.user;
        localStorage.setItem('access-token', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));

        return this.user;
    }

    async loginOtp(code: number, header: any) {
        const result = await this.httpPOST<any>(`v1/auth/verify-otp`, { code: code }, header);
        this.token = result.token;
        this.user = result.user;

        localStorage.setItem('access-token', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));

        return this.user;
    }


    async signup(userDetails: any) {
        try {
            const result: any = await this.httpPOST('register', userDetails);
            this.token = result.token;
            this.user = result.user
            return result;
        } catch (error) {
            throw error;
        }
    }

    async httpPOST<R>(path: string, body: any, headers?: Record<string, string>, includeAuthHeader = true): Promise<R> {
        try {
            headers = includeAuthHeader ? { ...headers, authorization: `Bearer ${this.token}` } : {};
            const response = await httpPAYLOAD<ApiResponse<R>>(`${environment.api}/${path}`, body, headers);
            if (response.error) throw { code: 400, error: response.message, data: response.data };
            return response.data;
        } catch (error) {
            const e = error as any;
            if (e && 'code' in e) throw { code: e.code, error: e.message, data: e.data };
            else throw error;
        }
    }

    async httpPUT<R>(path: string, body: any, headers?: Record<string, string>, includeAuthHeader = true): Promise<R> {
        try {
            headers = includeAuthHeader ? { ...headers, authorization: `Bearer ${this.token}` } : {};
            const response = await httpPAYLOAD<ApiResponse<R>>(`${environment.api}/${path}`, body, headers, 'PUT');
            if (response.error) throw { code: 400, error: response.message, data: response.data };
            return response.data;
        } catch (error) {
            const e = error as any;
            if (e && 'code' in e) throw { code: e.code, error: e.message, data: e.data };
            else throw error;
        }
    }

    async httpDELETE<R>(path: string, body?: any, headers?: Record<string, string>, includeAuthHeader = true): Promise<R> {
        try {
            headers = includeAuthHeader ? { ...headers, authorization: `Bearer ${this.token}` } : {};
            const response = await httpPAYLOAD<ApiResponse<R>>(`${environment.api}/${path}`, body, headers, 'DELETE');
            if (response.error) throw { code: 400, error: response.message, data: response.data };
            return response.data;
        } catch (error) {
            const e = error as any;
            if (e && 'code' in e) throw { code: e.code, error: e.message, data: e.data };
            else throw error;
        }
    }

    async httpGET<R>(path: string, headers?: Record<string, string>, includeAuthHeader = true): Promise<R> {
        try {
            headers = includeAuthHeader ? { ...headers, authorization: `Bearer ${this.token}` } : {};
            const response = await httpGET<ApiResponse<R>>(`${environment.api}/${path}`, headers);
            if (response.error) throw { code: 400, error: response.message, data: response.data };
            return response.data;
        } catch (error) {
            const e = error as any;
            if (e && 'code' in e) throw { code: e.code, error: e.message, data: e.data };
            else throw error;
        }
    }
    // async thenOrShowToast<T>(path: string): Promise<T | undefined> {
    //     try {
    //         const result = await this.httpGET<T>(path);
    //         return result;
    //     } catch (e: any) {
    //         const msg = (e && typeof e == 'object' && 'error' in e ? e['error'] : '') as string;
    //         await showToast(msg ? msg : 'no content');
    //         return undefined;
    //     }
    // }
}
