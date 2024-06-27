import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";

@Component({
    selector: 'app-customer',
    standalone: true,
    templateUrl: './customer.component.html',
    styleUrl: './customer.component.scss',
    imports: [TableComponent]
})
export class CustomerComponent {

}
