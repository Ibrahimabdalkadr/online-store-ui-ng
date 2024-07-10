import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductComponent, SidebarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
    activeRoute = inject(ActivatedRoute)
    ngOnInit(): void {
        this.activeRoute.fragment.subscribe((data: any) => {
            document.getElementById(data)?.scrollIntoView({ behavior: "smooth" })
        })
    }

}

