import { DatePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-favorite',
    standalone: true,
    imports: [MatTableModule, DatePipe],
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FavoriteComponent {
    displayedColumns = ['id', 'status', 'total_price', 'created_at', 'actions'];
    dataSource: any = [];
    api = inject(AuthService)
    orderItems = []

    ngOnInit(): void {
        this.fetchFavorite()
    }

    async fetchFavorite() {
        try {
            const result = await this.api.httpGET<[]>('user/favorite')
            this.dataSource = result
        } catch (e) { }
    }

    editOrder(order: any) {
        console.log('Edit Order:', order);
    }

    deleteOrder(order: any) {
        console.log('Delete Order:', order);
    }
}
