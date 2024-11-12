import { Component } from '@angular/core';
import { DogComponent } from '../dog/dog.component';
import { Dog } from '../../types';
import { CommonModule } from '@angular/common';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [
    DogComponent,
    CommonModule
  ],
  providers: [
    DogService
  ],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class DogsComponent {

  dogs:Dog[] = [];

  constructor(dogService: DogService) {
    this.dogs = dogService.getDogs();
  }

  /*
  dogs:Dog[] = [
    { name: 'Boss', breed: 'Border Collie', url: '/images/dog-border-collie.jpeg', description: 'Boss is a happy dog that Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: 'Fido', breed: 'Poodle', url: '/images/dog-poodle.jpeg', description: 'Fido is an unhappy dog, she is a Poodle. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: 'Pricken', breed: 'Dachshound', url: '/images/dog-dachshund.jpeg', description: 'Pricken is a bastard Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: 'Stina', breed: 'Rottweiler', url: '/images/dog-rottweiler.jpeg', description: 'Stina is just adorable Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: 'Satan', breed: 'Chinese Crested', url: '/images/dog-chinese-crested.jpeg', description: 'No additional words needed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }    
  ];
  */

}
