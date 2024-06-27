import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { TableComponent } from "../table/table.component";

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.scss',
    imports: [SidebarComponent, RouterOutlet, NavbarComponent, TableComponent]
})
export class AdminLayoutComponent {

}
