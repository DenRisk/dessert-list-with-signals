import { Injectable } from "@angular/core";
import {ModalIdentifiers} from '../model/modal.model'

@Injectable({providedIn: 'root'})
export class ModalService {

  openModal(id: ModalIdentifiers) {
    const modal = document.querySelector(`app-modal #${id}`);
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  }

  closeModal(id: ModalIdentifiers) {
    const modal = document.querySelector(`app-modal #${id}`);
    if (modal) {
      (modal as HTMLDialogElement).close();
    }
  }
}
