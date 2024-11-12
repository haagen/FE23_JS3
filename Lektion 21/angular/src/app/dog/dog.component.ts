import { Component, Input } from '@angular/core';
import { Dog } from '../../types';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {

  @Input() data:Dog = {
    name: 'Boss',
    breed: 'Border Collie',
    url: '/images/dog-border-collie.jpeg',
    description: 'Lorem Ipsum'
  }

}
