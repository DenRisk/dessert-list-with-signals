import { Component, computed, effect, inject } from '@angular/core';
import { DessertsService } from './features/desserts/services/desserts.service';
import { DessertsComponent } from './features/desserts/components/desserts/desserts.component';
import {CartComponent} from './features/cart/components/cart/cart.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DessertsComponent, CartComponent],
})
export class AppComponent {}
