import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecustom',
  standalone: true
})
export class PipecustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
