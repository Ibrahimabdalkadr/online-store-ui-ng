import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";

@Component({
    selector: 'app-merchant',
    standalone: true,
    templateUrl: './merchant.component.html',
    styleUrl: './merchant.component.scss',
    imports: [TableComponent]
})
export class MerchantComponent {

}
