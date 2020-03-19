import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/item';

@Component({
    selector:'sf-production',
    templateUrl:'./production.component.html',
    styleUrls:['./production.component.css']
})

export class ProductionComponent{
@Input() item: IItem
@Input() items: IItem[]

GetItemByName(name: string){
    return this.items.find(x=>x.value === name);
}
}