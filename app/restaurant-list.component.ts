import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantDetailsComponent} from './restaurant-details.component';
import { DeletePipe } from './delete.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  pipes: [DeletePipe],
  directives: [RestaurantComponent, NewRestaurantComponent, RestaurantDetailsComponent],
  template: `
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
    <br>
    <restaurant-display *ngFor="#currentRestaurant of restaurantList | delete"
      [restaurant]="currentRestaurant"
    ></restaurant-display>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  createRestaurant(userInputArray: string[]): void {
    this.restaurantList.push(
      new Restaurant(userInputArray[0], userInputArray[1], userInputArray[2], userInputArray[3])
    );
    this.deleteCleanup();
  }
  deleteCleanup(): void {
    for (var i = 0; i < this.restaurantList.length; i++){
      if (this.restaurantList[i].delete) {
        this.restaurantList.splice(i, 1);
      }
    }
  }
}
