import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [MatTableModule, DatePipe],
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdersComponent implements OnInit {
    displayedColumns = ['id', 'status', 'total_price', 'created_at', 'actions'];
    dataSource: any = [];
    api = inject(AuthService)
    orderItems = []

    ngOnInit(): void {
        this.fetchOrders()
    }

    async fetchOrders() {
        try {
            const result = await this.api.httpGET<[]>('order')
            // this.orderItems = result
            this.dataSource = result
        } catch (e) { }
    }

    editOrder(order: any) {
        // Implement edit action here, e.g., open a dialog for editing
        console.log('Edit Order:', order);
    }

    deleteOrder(order: any) {
        console.log('Delete Order:', order);
    }

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