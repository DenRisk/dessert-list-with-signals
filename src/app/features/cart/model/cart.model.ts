import {Dessert} from '../../desserts/model/dessert'

export type CartModel = {
  entries: Dessert[],
  totalPrice: number
}
