import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    api = inject(AuthService)


}
