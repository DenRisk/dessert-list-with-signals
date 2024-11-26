import {Component} from '@angular/core';
import {DessertsComponent} from './features/desserts/components/desserts/desserts.component'
import {CartComponent} from './features/cart/components/cart/cart.component'
import {ModalComponent} from './features/modal/components/modal/modal.component'
import {ConfirmationComponent} from './features/confirmation/components/confirmation/confirmation.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    DessertsComponent,
    CartComponent,
    ModalComponent,
    ConfirmationComponent
  ]
})
export class AppComponent {}


