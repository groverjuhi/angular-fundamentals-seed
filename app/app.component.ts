import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <h1>{{ title }}</h1>
    <img [src] = 'logo'>
      <div>
        <input 
          type="text"
          [value]="name"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)">
      </div>
      <div>
        {{ name }}
      </div>
      <div>
        <button (click)="handleClick()">
        change name
        </button>
      </div>

      <!-- Creating seperate div for understanding ng module property and event binding -->

      <div>
      <input 
        type="text"
        [ngModel]="nameNew"
        (ngModelChange)="handleChange($event)">
        <input 
        type="text"
        [(ngModel)]="nameNew">
    </div>
    <div>
      {{ nameNew }}
    </div>

      <!-- Testing Refrence -->
      
      <div>
        <input
        type = "text" #username>
        <button (click)="getValueOnClick(username.value)">
        Get Value
        </button>
      </div>

      <div>
      {{ nameUser }}
      </div>

      <!-- Testing show and hide behaviour using ngIf -->
      
      <div>
        <input
        type = "text"
        [value]="nameUser"
        (input)="handleInputCheck($event.target.value)">

      </div>

      <div *ngIf="nameUser.length > 2">
      Searching for .... {{ nameUser }}
      </div>

      <template [ngIf]="nameUser.length > 2">
      <div>
      Searching for .... {{ nameUser }}
      </div>
      </template>


    </div>
  `
})

export class AppComponent {

  title: string;
  logo: string;
  name: string;
  nameNew: string;
  nameUser: string;

  handleInput(event: any){
    this.name = event.target.value;
  }
  handleBlur(event: any){
    // this.name = event.target.value;
    this.name = 'JUHI';
  }
  handleClick(){
    this.name = 'JUHI GROVER';
  }
  handleChange(value: string) {
    this.nameNew = value;
  }
  getValueOnClick(value: string){
    this.nameUser = value;
  }

  handleInputCheck(value: string){
    this.nameUser = value;
  }
  constructor() {
    this.title = 'Hello Ultimate Angular';
    this.logo = 'img/Hindi_swar_mala.jpg';
    this.name = 'thakur';
    this.nameNew = 'juhi';
    this.nameUser = '';

  }

}
