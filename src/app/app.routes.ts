import { Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/signup/signup.component';
import { MainClientLayoutComponent } from './client/main-client-layout/main-client-layout.component';
import { AuthClientLayoutComponent } from './client/auth-client-layout/auth-client-layout.component';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './cp/admin-layout/admin-layout.component';
import { DashboardComponent } from './cp/dashboard/dashboard.component';
import { CustomerComponent } from './cp/customer/customer.component';
import { MerchantComponent } from './cp/merchant/merchant.component';
import { ProductComponent } from './cp/product/product.component';
import { CategoryComponent } from './cp/category/category.component';
import { OrdersComponent } from './client/orders/orders.component';
import { ProfileComponent } from './client/profile/profile.component';
import { FavoriteComponent } from './client/favorite/favorite.component';
import { ErrorComponent } from './client/error/error.component';

export const routes: Routes = [

    {
        path: '',
        component: MainClientLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'order', component: OrdersComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'favorite', component: FavoriteComponent },
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


    { path: '**', pathMatch: 'full', component: ErrorComponent }
];