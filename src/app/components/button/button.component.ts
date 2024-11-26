import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() onConfirmClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    this.onConfirmClick.emit(event);
  }
}
