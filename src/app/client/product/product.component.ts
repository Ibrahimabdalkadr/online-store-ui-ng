import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductComponent {

}
