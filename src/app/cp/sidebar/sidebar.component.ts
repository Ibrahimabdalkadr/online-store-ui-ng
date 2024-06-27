import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {

}
