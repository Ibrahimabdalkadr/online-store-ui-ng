import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main-client-layout',
    standalone: true,
    templateUrl: './main-client-layout.component.html',
    styleUrl: './main-client-layout.component.scss',
    imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class MainClientLayoutComponent {

}
