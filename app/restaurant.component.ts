import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent} from './restaurant-details.component';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  directives: [RestaurantDetailsComponent],
  template: `
    <h3 (click)="restaurantClicked()">{{ restaurant.name }} - {{ restaurant.getReviewAvg()}}</h3>
    <restaurant-details *ngIf="detailShow" [restaurant]="restaurant"></restaurant-details>

  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;
  public detailShow: boolean = false;
  restaurantClicked(): void {
    this.detailShow = !this.detailShow;
  }
}
