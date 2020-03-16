import { Component } from '@angular/core';

export interface Item {
  value: string;
  viewValue: string;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  selectedItem: Item= { value: "", viewValue: "", img: "" };
  items: Item[] = [
    { value: 'Computer', viewValue: 'Pizza', img: 'assets/images/computer.png' },
    { value: 'Plastic', viewValue: 'Steak', img: 'assets/images/plastic.png' },
    { value: 'tacos-2', viewValue: 'Tacos', img: 'https://www.akberiqbal.com/favicon-16x16.png' }
  ];
}
