import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantDetailsComponent} from './restaurant-details.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent, RestaurantDetailsComponent],
  template: `
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
    <restaurant-display *ngFor="#currentRestaurant of restaurantList"
      [restaurant]="currentRestaurant"
      (click)="restaurantClicked(currentRestaurant)"
      [class.selected]="currentRestaurant === selectedRestaurant"
    ></restaurant-display>
    <restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></restaurant-details>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  createRestaurant(userInputArray: string[]): void {
    this.restaurantList.push(
      new Restaurant(userInputArray[0], userInputArray[1], userInputArray[2], userInputArray[3])
    );
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
  }
}
