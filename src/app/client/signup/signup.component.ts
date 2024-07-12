import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss'
})
export class SignupComponent {
    signupData: Partial<signupData> = {}
    api = inject(AuthService)

    async signup() {
        if (this.signupData.password !== this.signupData.confirmPassword) return
        try {
            await this.api.signup(this.signupData)
        } catch (e) { }
    }
}
type signupData = {
    first_name: string
    last_name: string
    email: string
    password: string
    confirmPassword: string
}