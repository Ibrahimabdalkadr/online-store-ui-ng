import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-floating-cart',
    standalone: true,
    imports: [MatCardModule, MatListModule],
    templateUrl: './floating-cart.component.html',
    styleUrl: './floating-cart.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FloatingCartComponent {
    @Input() cartItems: any[] = [];


    removeItem(id: number) {
        const index = this.cartItems.find((item) => { item.id = id })
        this.cartItems.splice(index, 1);
    }


    private dragging = false;
    private dragStartX = 0;
    private dragStartY = 0;
    private elementStartX = 0;
    private elementStartY = 0;

    startDrag(event: MouseEvent) {
        this.dragging = true;
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;

        const element = (event.target as HTMLElement).closest('.floating-cart') as HTMLElement;
        this.elementStartX = element.offsetLeft;
        this.elementStartY = element.offsetTop;

        event.preventDefault();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (this.dragging) {
            const deltaX = event.clientX - this.dragStartX;
            const deltaY = event.clientY - this.dragStartY;

            const element = document.querySelector('.floating-cart') as HTMLElement;
            element.style.left = `${this.elementStartX + deltaX}px`;
            element.style.top = `${this.elementStartY + deltaY}px`;
        }
    }

    @HostListener('document:mouseup', ['$event'])
    onMouseUp() {
        this.dragging = false;
    }
}
