import {Injectable, signal, computed, effect} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {Dessert} from '../../desserts/model/dessert';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<CartModel>({entries: [], totalPrice: 0});

  cartEntries = computed(() => this.cart().entries);

  totalCount = computed(() =>
    this.cart().entries.reduce((total, item) => total + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cart().entries.reduce((total, item) => total + item.totalPrice, 0)
  );

  addEntry(entry: Dessert) {
    this.cart.update(cart => {
      const existingItem = cart.entries.find(i => i.id === entry.id);

      if (existingItem) {
        return {
          ...cart,
          entries: cart.entries.map(item =>
            item.id === entry.id
              ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
              }
              : item
          ),
        };
      } else {
        return {
          ...cart,
          entries: [...cart.entries, {...entry, quantity: 1, totalPrice: entry.price}],
        };
      }
    });
  }

  removeEntry(entryId: string, clear: boolean = false) {
    this.cart.update(cart => {
      const existingItem = cart.entries.find(i => i.id === entryId);

      if (existingItem) {
        if (existingItem.quantity > 1 && !clear) {
          return {
            ...cart,
            entries: cart.entries.map(entry =>
              entry.id === entryId
                ? {
                  ...entry,
                  quantity: entry.quantity - 1,
                  totalPrice: entry.price * (entry.quantity - 1),
                }
                : entry
            ),
          };
        } else {
          return {
            ...cart,
            entries: cart.entries.filter(i => i.id !== entryId),
          };
        }
      }
      return cart;
    });
  }

  clearCart() {
    this.cart.set({entries: [], totalPrice: 0});
  }
}
