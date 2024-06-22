import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FooterComponent {

}
