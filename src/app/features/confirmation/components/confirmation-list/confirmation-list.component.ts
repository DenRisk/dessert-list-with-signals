import { Component, Input, Signal } from '@angular/core';
import {CartListItemComponent} from '../../../cart/components/cart-list-item/cart-list-item.component'
import {ConfirmationListItemComponent} from '../confirmation-list-item/confirmation-list-item.component'
import {Dessert} from '../../../desserts/model/dessert'
import {PriceFormatPipe} from '../../../../pipes/price-format/price-format.pipe'

@Component({
  selector: 'app-confirmation-list',
  imports: [ConfirmationListItemComponent, PriceFormatPipe],
  templateUrl: './confirmation-list.component.html',
  styleUrl: './confirmation-list.component.css'
})
export class ConfirmationListComponent {
  @Input() cartEntries: Signal<Dessert[]> | undefined
  @Input() cartTotal: Signal<number> | undefined
}
