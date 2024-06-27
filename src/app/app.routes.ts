import { Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/sginup/signup.component';
import { MainClientLayoutComponent } from './client/main-client-layout/main-client-layout.component';
import { AuthClientLayoutComponent } from './client/auth-client-layout/auth-client-layout.component';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './cp/admin-layout/admin-layout.component';

export const routes: Routes = [

    {
        path: 'home',
        component: MainClientLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
        ],
        canActivate: [authGuard],
    },

    {
        path: '',
        component: AuthClientLayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ],
    },

    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            // { path: '', component: HomeComponent },
        ],
    },


    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];