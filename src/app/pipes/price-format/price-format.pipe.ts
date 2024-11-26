import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true,
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number, currency: string = '$', decimals: number = 2): string {
    if (isNaN(value)) {
      return `${currency}0.00`;
    }
    return `${currency}${value.toFixed(decimals)}`;
  }
}
