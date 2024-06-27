import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

}
