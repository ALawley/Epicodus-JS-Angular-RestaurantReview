import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  template: `
    <div class="restaurant-details">
      <h3>{{ restaurant.name }}</h3>
      <h4>{{ restaurant.specialty }}</h4>
      <h4>{{ restaurant.address }} {{ restaurant.price }}</h4>
    </div>
  `
})
export class RestaurantDetailsComponent {
  public restaurant: Restaurant;
}
