import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-btn',
  imports: [],
  templateUrl: './count-btn.component.html',
  styleUrl: './count-btn.component.css'
})
export class CountBtnComponent {
  @Input({ required: true }) countType: 'Increment' | 'Decrement' | undefined;

  changeCount() {
  }
}
