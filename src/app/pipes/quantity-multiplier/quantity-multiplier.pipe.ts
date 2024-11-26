import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityMultiplier',
  standalone: true,
})
export class QuantityMultiplierPipe implements PipeTransform {
  transform(value: number): string {
    return `${value}x`;
  }
}
