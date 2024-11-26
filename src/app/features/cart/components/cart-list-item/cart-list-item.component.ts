import { Component, inject, Input } from '@angular/core';
import { RemoveBtnComponent } from '../../../../components/remove-btn/remove-btn.component';
import { Dessert } from '../../../desserts/model/dessert';
import { CartService } from '../../services/cart.service';
import {PriceFormatPipe} from '../../../../pipes/price-format/price-format.pipe'
import {QuantityMultiplierPipe} from '../../../../pipes/quantity-multiplier/quantity-multiplier.pipe'

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css'],
  imports: [RemoveBtnComponent, PriceFormatPipe, QuantityMultiplierPipe],
  standalone: true,
})
export class CartListItemComponent {
  cartService = inject(CartService);

  @Input({ required: true }) dessert: Dessert | undefined;

  removeEntry(entryId: string) {
    this.cartService.removeEntry(entryId, true);
  }
}
