import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateService {

    private _currency$ = new BehaviorSubject<string>('USD');

    get currency(): any {
        return this._currency$.value;
    }

    set currency(t: any) {
        this._currency$.next(t);
    }

    currency$: Observable<any> = this._currency$.asObservable();


    constructor() {
        this.fetchExchangeRate()
    }

    async fetchExchangeRate(): Promise<number> {
        try {
            const response: any = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ZcupBGhISpIVxGlUO9VPBY39f3DwxGBKt0QnlI1x')
            const text = await response.text();
            const parseResult = JSON.parse(text);
            return parseResult.data[this.currency]
        } catch (e) {
            return 1
        }
    }

    setCurrency(currency = "USD") {
        this.currency = currency
    }
}

