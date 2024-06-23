import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    api = inject(AuthService)
    router = inject(Router)
    loginData: Partial<LoginData> = {}

    async login() {
        try {
            if (!this.loginData.email || !this.loginData.password) return
            await this.api.login(this.loginData.email, this.loginData.password)
            this.router.navigateByUrl('home')
        } catch (e) {
            // show toat
        }
    }
}
type LoginData = {
    email: string;
    password: string;
}
