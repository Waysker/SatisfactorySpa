import { Component } from '@angular/core';
import { IItem } from './item';
import { ItemsService } from './items.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  selectedItem: IItem = {name:'',img:'', components: null,outputPerMin: null}
  items: IItem[];

  constructor(private itemsService: ItemsService){
    this.items = itemsService.getItems()
  }
}

