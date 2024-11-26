import { Component, computed, inject, Signal } from '@angular/core';
import {ConfirmationListComponent} from '../confirmation-list/confirmation-list.component'
import {ButtonComponent} from '../../../../components/button/button.component'
import {CartService} from '../../../cart/services/cart.service'
import {Dessert} from '../../../desserts/model/dessert'
import {ModalService} from '../../../modal/services/modal.service'

@Component({
  selector: 'app-confirmation',
  imports: [
    ConfirmationListComponent,
    ButtonComponent
  ],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  cartService = inject(CartService);
  modalService = inject(ModalService);

  cartEntries: Signal<Dessert[]> = computed(() => this.cartService.cartEntries());
  cartTotal: Signal<number> = computed(() => this.cartService.totalPrice());

  startNewOrder() {
    this.cartService.clearCart();
    this.modalService.closeModal('Confirmation')
  }
}
