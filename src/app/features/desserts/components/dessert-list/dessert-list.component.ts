import {Component, computed, effect, inject, Input, Signal} from '@angular/core';
import {DessertsService} from '../../services/desserts.service';
import {DessertListItemComponent} from '../dessert-list-item/dessert-list-item.component';
import {Dessert} from '../../model/dessert'

@Component({
  selector: 'app-dessert-list',
  imports: [DessertListItemComponent],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css',
  standalone: true
})
export class DessertListComponent {
  /** Desserts **/
  dessertService = inject(DessertsService);
  dessertResource = this.dessertService.getDesserts();
  desserts: Signal<Dessert[]> = computed(() => this.dessertResource.value() ?? []);

  /** Cart Entries **/
  @Input() cartEntries!: Signal<Dessert[]>;

  /**
   * Compute the desserts with their quantity in the cart
   * **/
  dessertsWithQuantity = computed(() => {
    const desserts = this.desserts();
    const cartEntries = this.cartEntries();

    return desserts.map(dessert => {
      const cartItem = cartEntries.find(entry => entry.id === dessert.id);
      return {
        ...dessert,
        quantity: cartItem?.quantity ?? 0,
      };
    });
  });
}
