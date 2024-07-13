import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, model, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../../modal/modal.component';
@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [MatTableModule, DatePipe, MatButtonModule, MatMenuModule, ModalComponent],
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdersComponent implements OnInit {
    @ViewChild(ModalComponent) dialog?: ModalComponent;
    api = inject(AuthService)

    OrderDisplayedColumns = ['id', 'status', 'total_price', 'created_at', 'actions'];
    showOrdersDataSource: any = [];

    showProductDataSource: any = [];
    productDisplayedColumns = ['image', 'name', 'price', 'quantity', 'actions'];


    ngOnInit(): void {
        this.fetchOrders()
    }

    async fetchOrders() {
        try {
            const result = await this.api.httpGET<[]>('order')
            this.showOrdersDataSource = result
        } catch (e) { }
    }

    editOrder(order: any) {
        this.dialog?.open();
        this.showProductDataSource = order.products
    }

    async deleteOrder(order: any) {
        try {
            await this.api.httpDELETE(`order/${order.id}`)
        } catch (e) { }
    }

    async deleteProductFromOrder(product: any) {
        try {
            const orderId = this.showProductDataSource.id
            await this.api.httpDELETE(`order/${orderId}/${product.id}`)
        } catch (e) { }
    }

    paymentOrder(order: any) { }

}

type Order = {
    id: number
    status: number
    total_price: number
    user_id: number
    created_at: string
    updated_at: string
    products: any
}