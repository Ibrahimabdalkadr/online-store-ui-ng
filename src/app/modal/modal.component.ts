import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [NgTemplateOutlet],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
    @Input() template: TemplateRef<any> | any;
    @Input() productId?: number;
    open() {
        this.dialog.nativeElement.showModal();
    }

    close() {
        this.dialog.nativeElement.close();
    }


    handleDialogClick(event: MouseEvent) {
        if (event.target === this.dialog.nativeElement) {
            this.close();
        }
    }
}
