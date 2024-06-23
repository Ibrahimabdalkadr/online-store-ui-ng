import { CUSTOM_ELEMENTS_SCHEMA, Component, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ShowAccordionDirective } from '../../directives/show-accordion.directive';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [ShowAccordionDirective],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SidebarComponent {

}

