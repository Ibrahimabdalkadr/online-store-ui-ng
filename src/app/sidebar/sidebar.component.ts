import { CUSTOM_ELEMENTS_SCHEMA, Component, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
    selector: '[data-accordion-btn]',
    standalone: true
})
export class AccordionDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onClick() {
    }
}
@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [],
    hostDirectives: [AccordionDirective],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SidebarComponent {

}

