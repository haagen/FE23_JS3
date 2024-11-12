import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    DogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
