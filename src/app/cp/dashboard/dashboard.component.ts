import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [TableComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {

}
