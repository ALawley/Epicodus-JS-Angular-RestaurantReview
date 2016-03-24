import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent],
  template: `
    <restaurant-display *ngFor="#currentRestaurant of restaurantList" [restaurant]="currentRestaurant">
    </restaurant-display>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
}
