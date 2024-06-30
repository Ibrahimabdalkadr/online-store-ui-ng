import { CUSTOM_ELEMENTS_SCHEMA, Component, Directive, ElementRef, HostListener, OnInit, Renderer2, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SidebarComponent implements OnInit {
    api = inject(AuthService)

    categories: Category[] = []
    ngOnInit(): void {
        this.fetchCategory()
    }

    async fetchCategory() {
        try {
            const result = await this.api.httpGET<{ categories: Category[] }>('category')
            this.categories = result.categories
            console.log(this.categories)
        } catch (e) { }
    }

}

type Category = {
    id: number
    name: string
    icon: string
    created_at: string
    updated_at: string
}