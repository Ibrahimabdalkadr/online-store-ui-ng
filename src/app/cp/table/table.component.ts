import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableComponent {

}
