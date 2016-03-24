import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent],
  template: `
    <restaurant-display *ngFor="#currentRestaurant of restaurantList" [restaurant]="currentRestaurant">
    </restaurant-display>
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  createRestaurant(userInputArray: string[]): void {
    this.restaurantList.push(
      new Restaurant(userInputArray[0], userInputArray[1], userInputArray[2], userInputArray[3])
    );
  }
}
