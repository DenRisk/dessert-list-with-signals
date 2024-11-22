import { Component, inject, Input, signal } from '@angular/core';
import {CartService} from '../../features/cart/services/cart.service'
import {Dessert} from '../../features/desserts/model/dessert'
import {CountBtnComponent} from '../count-btn/count-btn.component'

@Component({
  selector: 'app-add-cart-btn',
  templateUrl: './add-cart-btn.component.html',
  standalone: true,
  imports: [
    CountBtnComponent
  ],
  styleUrl: './add-cart-btn.component.css'
})
export class AddCartBtnComponent {
  cartService = inject(CartService);

  @Input({required: true}) dessert: Dessert | undefined;

  countSignal = signal<'Increment' | 'Decrement'>('Increment');

  handleCountChange = (countType: 'Increment' | 'Decrement') => {
    if (countType === 'Increment') {
      this.addEntryToCart(this.dessert);
    } else {
      this.removeEntryFromCart(this.dessert);
    }
  };

  addEntryToCart(entry: Dessert | undefined) {
    if (!entry) return
    this.cartService.addEntry(entry);
  }

  removeEntryFromCart(entry: Dessert | undefined) {
    if (!entry) return
    this.cartService.removeEntry(entry.id);
  }
}
