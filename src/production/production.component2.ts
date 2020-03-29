import { Component, Input, OnChanges } from '@angular/core';
import { IItem, IComponent } from 'src/app/item';
import { notEqual } from 'assert';
import { ItemsService } from 'src/app/items.service';

@Component({
    selector:'sf-production2',
    templateUrl:'./production.component2.html',
    styleUrls:['./production.component2.css']
})

export class ProductionComponent2 implements OnChanges{
@Input() selectedItem: IItem
items: IItem[]
@Input() amountNeeded: number;


constructor(private itemService: ItemsService){
    this.items=itemService.getItems();
    //check if this copies reference or creates new object ^
}

GetItemByName(name: string){
    return this.items.find(x=>x.name === name);
}

CalculateInput(inputPerMinute:number,outputPerMinute:number) :number {
    return inputPerMinute * (this.amountNeeded/outputPerMinute)
}
CalculateMachines(outputPerMinute: number) : number{
    return this.amountNeeded/outputPerMinute
}

ngOnChanges(){
}
}