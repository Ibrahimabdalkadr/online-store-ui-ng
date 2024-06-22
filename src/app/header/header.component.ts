import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeaderComponent {

}
