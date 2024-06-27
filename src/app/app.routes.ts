import { Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/sginup/signup.component';
import { MainClientLayoutComponent } from './client/main-client-layout/main-client-layout.component';
import { AuthClientLayoutComponent } from './client/auth-client-layout/auth-client-layout.component';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './cp/admin-layout/admin-layout.component';
import { DashboardComponent } from './cp/dashboard/dashboard.component';
import { CustomerComponent } from './cp/customer/customer.component';
import { MerchantComponent } from './cp/merchant/merchant.component';
import { ProductComponent } from './cp/product/product.component';
import { CategoryComponent } from './cp/category/category.component';

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
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'customer', component: CustomerComponent },
            { path: 'merchant', component: MerchantComponent },
            { path: 'product', component: ProductComponent },
            { path: 'category', component: CategoryComponent },
        ],
    },


    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];