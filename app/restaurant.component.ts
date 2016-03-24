import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <h3>{{ restaurant.name }}</h3>
  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;
}
