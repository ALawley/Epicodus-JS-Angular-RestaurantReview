import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { EditRestaurantDetailsComponent } from './edit-restaurant-details.component';
import { RateRestaurantComponent } from './rate-restaurant.component';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  outputs: ['onEditRestaurant'],
  directives: [EditRestaurantDetailsComponent, RateRestaurantComponent],
  template: `
    <div class="restaurant-details">
      <h4>{{ restaurant.specialty }}</h4>
      <h4>{{ restaurant.address }} {{ restaurant.price }}</h4>
      <button (click)=editRestaurant()>Edit</button>

      <edit-restaurant-details *ngIf="restaurantToEdit" [restaurant]="restaurant" (onEndEdit)="restaurantToEdit = false"></edit-restaurant-details>
      <rate-restaurant [restaurant]="restaurant"></rate-restaurant>
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
}
