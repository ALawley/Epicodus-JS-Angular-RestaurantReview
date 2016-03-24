import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [],
  template: `
    <restaurant-display *ngFor="#currentRestaurant of restaurantList" [restaurant]="currentRestaurant">
    </restaurant-display>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
}
