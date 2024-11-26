import { Component, computed, inject, Signal } from '@angular/core';
import { DessertListComponent } from '../dessert-list/dessert-list.component';
import {CartService} from '../../../cart/services/cart.service'
import {ModalService} from '../../../modal/services/modal.service'
import {Dessert} from '../../model/dessert'

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css',
  imports: [
    DessertListComponent
  ]
})
export class DessertsComponent {
  cartService = inject(CartService);

  cartEntries: Signal<Dessert[]> = computed(() => this.cartService.cartEntries());
}
