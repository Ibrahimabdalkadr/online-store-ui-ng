import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductComponent, SidebarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}

