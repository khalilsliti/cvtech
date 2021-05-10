import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimg'
})
export class DefaultimgPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value)
    {
      return  "assets/images/cv.jpg";
    }
      return value
  }

}
