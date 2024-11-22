import { Component } from '@angular/core';
import { DessertListComponent } from '../dessert-list/dessert-list.component';

@Component({
  selector: 'app-desserts',
  imports: [DessertListComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css',
})
export class DessertsComponent {}
