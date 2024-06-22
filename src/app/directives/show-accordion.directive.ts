import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[data-accordion-btn]',
    standalone: true
})
export class ShowAccordionDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onClick() {
        const accordionItems = document.querySelectorAll('[data-accordion]');
        const accordionButtons = document.querySelectorAll('[data-accordion-btn]');
        for (let i = 0; i < accordionItems.length; i++) {
            accordionItems[i].classList.remove('active')
            accordionButtons[i].classList.remove('active')
        }
        this.el.nativeElement.nextElementSibling.classList.toggle('active');
        this.el.nativeElement.classList.toggle('active')
    }
}
