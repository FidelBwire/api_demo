import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {
    if (value == null)
      return '';
    else {
      return value.split(',').map(val => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()).join(' ');
    }
  }

}

