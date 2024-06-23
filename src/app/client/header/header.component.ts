import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeaderComponent {

}
