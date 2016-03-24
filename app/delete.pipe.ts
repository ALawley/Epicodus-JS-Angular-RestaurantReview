import { Pipe, PipeTransform } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: "delete",
  pure: false
})

export class DeletePipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    return input.filter((restaurant) => {
      if (!restaurant.delete) {
        return true;
      }
    });
  }
}
