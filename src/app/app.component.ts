import { Component } from '@angular/core';
import { IItem } from './item';
import { ItemsService } from './items.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SatisfactorySpa'
  selectedItem: IItem 
  items: IItem[]
  amountNeeded: number = 1
  selectedRecipe: string[] = ['default']
  selectedRecipes: string[] 
  constructor(private itemsService: ItemsService){
    this.items = itemsService.getItems()
  }

}

