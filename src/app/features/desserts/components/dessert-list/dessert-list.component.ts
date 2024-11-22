import { Component, computed, effect, inject, Signal } from '@angular/core';
import { DessertsService } from '../../services/desserts.service';
import { DessertListItemComponent } from '../dessert-list-item/dessert-list-item.component';
import {CartService} from '../../../cart/services/cart.service'
import {Dessert} from '../../model/dessert'

@Component({
  selector: 'app-dessert-list',
  imports: [DessertListItemComponent],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css',
  standalone: true
})
export class DessertListComponent {
  dessertService = inject(DessertsService);
  cartService = inject(CartService);

  dessertResource = this.dessertService.getDesserts();
  desserts: Signal<Dessert[]> = computed(() => this.dessertResource.value() ?? []);

  /**
   * Compute the desserts with their quantity in the cart
   * **/
  dessertsWithQuantity = computed(() => {
    const desserts = this.desserts();
    const cartEntries = this.cartService.cartEntries();

    return desserts.map(dessert => {
      const cartItem = cartEntries.find(entry => entry.id === dessert.id);
      return {
        ...dessert,
        quantity: cartItem?.quantity ?? 0,
      };
    });
  });

  constructor() {
    effect(() => {
      console.log('Entries', this.dessertsWithQuantity());
    });
  }
}
