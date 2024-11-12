import { Component, Input } from '@angular/core';
import { Dog } from '../../types';
import { LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [
    LikeComponent
  ],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {

  @Input() data:Dog = { name: '', breed: '', url: '', description: '', liked: false }

}
