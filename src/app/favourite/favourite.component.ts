import { Component } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  isActive: boolean;
  constructor() { }

  toggleFave() {
    this.isActive = !this.isActive;
  }

}
