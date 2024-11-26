import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.css'],
  standalone: true,
})
export class RemoveBtnComponent {
  @Input() entryId: string | undefined;
  @Output() onRemoveEntry = new EventEmitter<string>();

  removeEntry() {
    this.onRemoveEntry.emit(this.entryId);
  }
}
