import { Component, Input } from '@angular/core';
import {ModalIdentifiers} from '../../model/modal.model'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
})
export class ModalComponent {
  @Input({required: true}) id: ModalIdentifiers = 'Confirmation'
}
