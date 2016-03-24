import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { SpecialtiesComponent } from './specialties.component';

@Component({
  selector: 'new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  directives: [SpecialtiesComponent],
  template: `
    <div class="restaurant-form">
      <h4>Add a Restaurant:</h4>
      <form (submit)="addRestaurant(newName, newAddress, newPrice)">
        <input required placeholder="name" class="input-lg" #newName>
        <specialties (onSpecialtySelect)="setSpecialty($event)"></specialties>
        <input required placeholder="address" class="input-lg" #newAddress>
        <input required placeholder="price" type="text" class="input-lg" #newPrice>
        <button type="submit" class="btn-success btn-lg add-button">Add</button>
      </form>
    </div>
  `
})

export class NewRestaurantComponent {
  public newRestaurantSpecialty: string = "Sandwiches";
  public onSubmitNewRestaurant: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewRestaurant = new EventEmitter();
  }
  addRestaurant(newName: HTMLInputElement, newAddress: HTMLInputElement, newPrice: HTMLInputElement){
    var newRestaurantInputs: string[] = [];
    newRestaurantInputs.push(newName.value);

    newRestaurantInputs.push(this.newRestaurantSpecialty);
    newRestaurantInputs.push(newAddress.value);
    newRestaurantInputs.push(newPrice.value);

    this.onSubmitNewRestaurant.emit(newRestaurantInputs);
    newName.value="";
    newAddress.value="";
    newPrice.value="";
  }
  setSpecialty(specialtyValue: string) {
    console.log("parent", specialtyValue);
    this.newRestaurantSpecialty = specialtyValue;
    console.log("specialty set", this.newRestaurantSpecialty);
  }
}
