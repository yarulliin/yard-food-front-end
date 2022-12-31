import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertFromIso',
  standalone: true
})
export class ConvertFromIsoPipe implements PipeTransform {
  public transform(date: string): Date {
    return new Date(date);
  }
}
