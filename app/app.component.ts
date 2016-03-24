import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantList } from './restaurant-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <h1>Restaurant Reviews!</h1>
      <restaurant-list [restaurantList]="restaurants"></restaurant-list>
    </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];
  constructor() {
    this.restaurants = [
      new Restaurant("Lardo", "Sandwiches", "SE 12th & Hawthorne", "$"),
      new Restaurant("Hapa", "Ramen", "SE 28th & Division", "$"),
      new Restaurant("Guero", "Mexican", "SE 28th & Ankeny", "$"),
      new Restaurant("The Woodsman", "New American", "SE 46th & Division", "$$"),
      new Restaurant("Ava Gene's", "Italian", "SE 34th & Division", "$$$")
    ]
  }
}
