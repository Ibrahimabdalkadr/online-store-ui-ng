import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const api = inject(AuthService)
    const router = inject(Router)
    if (api.token) return true;
    return router.parseUrl('/')

};
