import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
    api = inject(AuthService)
    user: any = {}
    ngOnInit(): void {
        this.api.user$.subscribe((user) => this.user = user)
    }

}
