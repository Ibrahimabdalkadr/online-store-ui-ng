import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { DecimalPipe } from '@angular/common';
import { ExchangeRateService } from '../../services/exchange/exchange-rate.service';
import { ModalComponent } from '../../modal/modal.component';
import { FloatingCartComponent } from '../floating-cart/floating-cart.component';
import { Router } from '@angular/router';
@Component({
    selector: 'app-product',
    standalone: true,
    imports: [DecimalPipe, ModalComponent, FloatingCartComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductComponent implements OnInit {
    @ViewChild(ModalComponent) dialog?: ModalComponent;
    exchangeRateService = inject(ExchangeRateService)
    api = inject(AuthService)
    router = inject(Router)

    exchangeRate = 1;
    symbol = ''
    NUMBER_OF_RATING_STARS = 5
    ngOnInit(): void {
        const currencies: { [key: string]: string } = {
            'EUR': '€',
            'USD': '$',
        }
        this.fetchProduct()
        this.exchangeRateService.currency$.subscribe(async (currency) => {
            this.exchangeRate = await this.exchangeRateService.fetchExchangeRate()
            this.symbol = currencies[currency]
        })
    }


    newProducts: Product[] = []
    newArrivals: Product[] = []
    featured: Product[] = []
    paginate: { perPage: number, page: number } = { perPage: 30, page: 1 }
    async fetchProduct() {
        try {
            const tasks = [
                this.api.httpGET<{ products: Product[] }>('product', { ...this.paginate, featured: 0 }),
                this.api.httpGET<{ products: Product[] }>('product', { ...this.paginate, featured: 1 })
            ]
            const result = await Promise.all(tasks)
            const [products, featured] = result.map((item) => item.products)
            this.newProducts = products.slice(0, 15)
            this.newArrivals = products.slice(15, 30)
            this.featured = featured
        } catch (e) {

        }
    }

    currentProduct?: Product
    showProduct(product: Product) {
        this.currentProduct = product
        this.dialog?.open();
    }

    cartItems: any = []
    addToCart(product?: Product) {
        this.cartItems.push({ ...product })
    }

    removeFromCart(id: number) {
        const index = this.cartItems.find((item: any) => { item.id = id })
        this.cartItems.splice(index, 1);
    }


    async saveCart() {
        const products_id = this.cartItems.map((item: Product) => item.id)
        try {
            this.api.httpPOST('order', { products_id: products_id })
            this.router.navigateByUrl('order')
        } catch (e) { }
    }

    addToFavorite() { }
}
type Product = {
    id: number
    name: string
    image: string
    description: string
    price: number
    new_price: number
    category_id: number
    timestamps: string
    quantity: number
    rate: number
    category: {
        name: string
    }
}