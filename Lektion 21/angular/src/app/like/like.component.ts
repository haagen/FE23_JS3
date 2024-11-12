import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {

  @Input() liked:boolean = false;

  onClick(isLiked: boolean) {
    this.liked = isLiked;
  }

}
