import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantDetailsComponent} from './restaurant-details.component';
import { SpecialtiesComponent } from './specialties.component';
import { DeletePipe } from './delete.pipe';
import { SpecialtyPipe } from './specialty.pipe';


@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  pipes: [DeletePipe, SpecialtyPipe],
  directives: [RestaurantComponent, NewRestaurantComponent, RestaurantDetailsComponent, SpecialtiesComponent],
  template: `
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
    <specialties
    (onSpecialtySelect)="filterSpecialties($event)" class="filter"
    [showAll]="true"></specialties>
    <h2>{{specialtyFilter }}</h2>
    <restaurant-display *ngFor="#currentRestaurant of restaurantList | delete | specialty:specialtyFilter"
      [restaurant]="currentRestaurant"
    ></restaurant-display>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  public specialtyFilter: string = "All Restaurants";
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
  filterSpecialties(filterOption): void {
    this.specialtyFilter = filterOption;
  }
}
