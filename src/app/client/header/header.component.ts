import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExchangeRateService } from '../../services/exchange/exchange-rate.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule, FormsModule, ModalComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeaderComponent {
    currency = 'USD'
    exchangeRateService = inject(ExchangeRateService)
    ngOnInit() {
    }
    fetchExchangeRate() {
        this.exchangeRateService.setCurrency(this.currency)
    }
}
