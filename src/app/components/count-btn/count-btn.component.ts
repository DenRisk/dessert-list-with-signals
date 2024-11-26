import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-btn',
  templateUrl: './count-btn.component.html',
  styleUrl: './count-btn.component.css'
})
export class CountBtnComponent {
  @Input({ required: true }) countType: 'Increment' | 'Decrement' | undefined;
  @Output() onCountChange = new EventEmitter<'Increment' | 'Decrement'>();

  changeCount() {
    this.onCountChange.emit(this.countType);
  }
}
