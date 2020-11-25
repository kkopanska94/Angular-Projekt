import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.charAt(0) + value.charAt(1).toUpperCase() + value.slice(2);
  }

}
