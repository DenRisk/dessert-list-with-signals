import { Component, Input } from '@angular/core';
import {Dessert} from '../../../desserts/model/dessert'
import {PriceFormatPipe} from '../../../../pipes/price-format/price-format.pipe'
import {QuantityMultiplierPipe} from '../../../../pipes/quantity-multiplier/quantity-multiplier.pipe'

@Component({
  selector: 'app-confirmation-list-item',
  imports: [
    PriceFormatPipe,
    QuantityMultiplierPipe
  ],
  templateUrl: './confirmation-list-item.component.html',
  styleUrl: './confirmation-list-item.component.css'
})
export class ConfirmationListItemComponent {
  @Input() dessert: Dessert | undefined
}
