import { Component, Input, Signal } from '@angular/core';
import {Dessert} from '../../../desserts/model/dessert'
import {CartListItemComponent} from '../cart-list-item/cart-list-item.component'

@Component({
  selector: 'app-cart-list',
  imports: [
    CartListItemComponent
  ],
  templateUrl: './cart-list.component.html',
  standalone: true,
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
   @Input() cartEntries: Signal<Dessert[]> | undefined


}
