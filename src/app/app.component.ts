import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    title = 'online-store-ui';
}
