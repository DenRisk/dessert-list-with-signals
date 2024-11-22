import {Injectable, signal, computed, effect} from '@angular/core';
import {CartModel} from '../model/cart.model'
import {Dessert} from '../../desserts/model/dessert'


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<CartModel>({entries: [], totalPrice: 0});

  constructor() {
    effect(() => {
      console.log('Cart', this.cart());
    });
  }

  cartEntries = computed(() =>
    this.cart().entries
  );

  totalCount = computed(() =>
    this.cart().entries.reduce((total, item) => total + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cart().entries.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  addEntry(entry: Dessert) {
    const cart = this.cart(); // Aktuellen Zustand des Carts holen
    const existingItem = cart.entries.find(i => i.id === entry.id); // Prüfen, ob das Item existiert

    if (existingItem) {
      this.cart.set({
        ...cart,
        entries: cart.entries.map(item =>
          item.id === entry.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      // Item existiert nicht: Neues Item hinzufügen
      this.cart.set({
        ...cart,
        entries: [...cart.entries, { ...entry, quantity: 1 }],
      });
    }
  }



  removeEntry(entryId: string, clear: boolean = false) {
    const entryQuantity = this.cart().entries.find(i => i.id === entryId)?.quantity;

    if (entryQuantity && entryQuantity > 1 && !clear) {
      this.cart.set({
        ...this.cart(),
        entries: this.cart().entries.map(i => i.id === entryId ? {...i, quantity: i.quantity - 1} : i),
      });
    } else {
      this.cart.set({...this.cart(), entries: this.cart().entries.filter(i => i.id !== entryId)});
    }
  }

  clearCart() {
    this.cart.set({entries: [], totalPrice: 0});
  }
}
