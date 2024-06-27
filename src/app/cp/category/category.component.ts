import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";

@Component({
    selector: 'app-category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
    imports: [TableComponent]
})
export class CategoryComponent {

}
