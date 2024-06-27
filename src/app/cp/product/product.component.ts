import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [TableComponent]
})
export class ProductComponent {

}
