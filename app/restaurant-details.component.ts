import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { EditRestaurantDetailsComponent } from './edit-restaurant-details.component';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  outputs: ['onEditRestaurant'],
  directives: [EditRestaurantDetailsComponent],
  template: `
    <div class="restaurant-details">
      <h4>{{ restaurant.specialty }}</h4>
      <h4>{{ restaurant.address }} {{ restaurant.price }}</h4>
      <button (click)=editRestaurant()>Edit</button>

      <edit-restaurant-details *ngIf="restaurantToEdit" [restaurant]="restaurant" (onEndEdit)="restaurantToEdit = false" (onEndEdit)="deleteCleanup()"></edit-restaurant-details>
    </div>
  `
})
export class RestaurantDetailsComponent {
  public restaurantToEdit: boolean = false;
  public restaurant: Restaurant;
  public onEditRestaurant: EventEmitter<Restaurant>;
  constructor() {
    this.onEditRestaurant = new EventEmitter();
  }
  editRestaurant() {
    this.restaurantToEdit = true;
  }
  deleteCleanup() {

  }
}
