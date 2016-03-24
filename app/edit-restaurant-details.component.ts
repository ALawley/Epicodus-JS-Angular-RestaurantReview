import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { SpecialtiesComponent } from './specialties.component';

@Component({
  selector: 'edit-restaurant-details',
  inputs: ['restaurant'],
  outputs: ['onEndEdit'],
  directives: [SpecialtiesComponent],
  template: `
    <div class="restaurant-form">
      <h4>Edit Restaurant Information</h4>
      <input [(ngModel)]="restaurant.name" class="input-md">
      <specialties (onSpecialtySelect)="updateSpecialty($event)"></specialties>
      <input [(ngModel)]="restaurant.address" class="input-md">
      <input [(ngModel)]="restaurant.price" type="text" class="input-md">
      <button (click)=endEdit() class="btn-success btn-md add-button">Done Editing</button>
      <button (click)=deleteRestaurant() class="btn-success btn-md add-button">Delete Restaurant</button>
    </div>
  `
})
export class EditRestaurantDetailsComponent {
  public restaurant: Restaurant;
  public onEndEdit: EventEmitter<Restaurant>;
  constructor() {
    this.onEndEdit = new EventEmitter();
  }
  endEdit() {
    this.onEndEdit.emit(this.restaurant);
  }
  deleteRestaurant() {
    this.restaurant.delete = true;
    this.onEndEdit.emit(this.restaurant);
  }
  updateSpecialty(specialtyValue: string) {
    console.log("parent", specialtyValue);
    this.restaurant.specialty = specialtyValue;
  }
}
