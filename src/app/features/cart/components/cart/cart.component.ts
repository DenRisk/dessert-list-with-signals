import {Component, computed, inject, Signal} from '@angular/core';
import {CartListComponent} from '../cart-list/cart-list.component'
import {ButtonComponent} from '../../../../components/button/button.component'
import {CartEmptyComponent} from '../cart-empty/cart-empty.component'
import {CartService} from '../../services/cart.service'
import {ModalService} from '../../../modal/services/modal.service'
import {Dessert} from '../../../desserts/model/dessert'
import {PriceFormatPipe} from '../../../../pipes/price-format/price-format.pipe'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    CartListComponent,
    ButtonComponent,
    CartEmptyComponent,
    PriceFormatPipe
  ],
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);
  modalService = inject(ModalService);

  cartEntries: Signal<Dessert[]> = computed(() => this.cartService.cartEntries());
  cartTotal: Signal<number> = computed(() => this.cartService.totalPrice());
  cartQuantity: Signal<number> = computed(() => this.cartService.totalCount());

  openModal() {
    this.modalService.openModal('Confirmation');
  }
}
