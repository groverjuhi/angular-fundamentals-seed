import { Component } from '@angular/core';

interface Passenger{
id: number;
fullname: string;
checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers with sccs class</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [class.checked-in]= "passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname}}
          <!-- passenger list -->
        </li>
      </ul>

      <h3>Airline Passengers with ngClass</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngClass]= "{ 'checked-in': passenger.checkedIn,   
                        'checked-out': !passenger.checkedIn
                      }" ></span>
          {{ i }}: {{ passenger.fullname}}
          <!-- passenger list -->
        </li>
      </ul>
      <h3>Airline Passengers with styling</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')">
          </span>
          {{ i }}: {{ passenger.fullname}}
          <!-- passenger list -->
        </li>
      </ul>
      <h3>Airline Passengers with ngStyle</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngStyle]="{ backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b') }">
          </span>
          {{ i }}: {{ passenger.fullname}}
          <!-- passenger list -->
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
passengers: Passenger[] = [{
  id: 1,
  fullname: 'Arnav',
  checkedIn: true
  }, {
  id: 2,
  fullname: 'Juhi',
  checkedIn: true
  }, {
  id: 3,
  fullname: 'Abhinav Grover',
  checkedIn: false
  }, {
  id: 4,
  fullname: 'Jyoti',
  checkedIn: true
  } 
]
}
