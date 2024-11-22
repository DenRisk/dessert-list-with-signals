import {Component} from '@angular/core';
import {CartEmptyComponent} from '../cart-empty/cart-empty.component'

@Component({
  selector: 'app-cart',
  imports: [CartEmptyComponent],
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrl: './cart.component.css'
})
export class CartComponent {}
