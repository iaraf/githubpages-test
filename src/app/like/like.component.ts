import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface LikeChangeEventArge {
  Liked : boolean;
  Likes : number;
}

@Component({
  selector: 'likeheart',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likes') likes: number;
  @Input('isLiked') isLiked: boolean;
  @Output('change') change = new EventEmitter();

  toggleLiked(){
    this.likes += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
    let eventArgs : LikeChangeEventArge = 
    { 
      Likes: this.likes,
      Liked: this.isLiked    
    } 
    this.change.emit(eventArgs);
  }

}
