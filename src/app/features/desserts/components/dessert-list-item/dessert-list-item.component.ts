import {Component, Input} from '@angular/core';
import {AddCartBtnComponent} from '../../../../components/add-cart-btn/add-cart-btn.component'
import {Dessert} from '../../model/dessert'

@Component({
  selector: 'app-dessert-list-item',
  imports: [AddCartBtnComponent],
  templateUrl: './dessert-list-item.component.html',
  styleUrl: './dessert-list-item.component.css',
  standalone: true
})
export class DessertListItemComponent {
  @Input({required: true}) dessert: Dessert | undefined;
}
