import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    console.log('hi')
    return true;
};
