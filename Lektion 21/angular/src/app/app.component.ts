import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { Dog } from '../types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    DogsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  //thisDog:Dog = { name: 'N', url: '/images/dog-border-collie.jpeg', breed: 'b', description: 'asdasd' };
}
