import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './sginup/signup.component';

export const routes: Routes = [
    // {
    //     path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent
    // },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    }
];