import { Component, Input, OnChanges } from '@angular/core';
import { IItem, IComponent } from 'src/app/item';

@Component({
    selector:'sf-production2',
    templateUrl:'./production.component2.html',
    styleUrls:['./production.component2.css']
})

export class ProductionComponent2 implements OnChanges{
@Input() item: IItem
@Input() items: IItem[]
@Input() amountNeeded: number;
inputs: IComponent[];

GetItemByName(name: string){
    return this.items.find(x=>x.name === name);
}

ngOnChanges(){
    this.item.components.forEach(element => {
        element.inputPerMinute = element.inputPerMinute * (this.amountNeeded/this.item.outputPerMin)
    });
}
}