import { Injectable } from '@angular/core';
import { IItem } from './item';

@Injectable({
    providedIn:'root'
})

export class ItemsService{

    getItems(): IItem[]{
        return [{
                name: 'Computer',
                img: 'assets/images/computer.png',
                outputPerMin: 2.5,
                components: [
                    {name:'Circuit Board', inputPerMinute: 25},
                    {name:'Cable', inputPerMinute: 22.5},
                    {name:'Plastic', inputPerMinute: 45},
                    {name:'Screw', inputPerMinute: 130}
                ]
            },
            {
                name: 'Plastic',
                img: 'assets/images/plastic.png',
                outputPerMin: 20,
                components: [
                    {name: 'Crude Oil', inputPerMinute: 30} 
                ]
            },
            {
                name: 'Cable',
                img: 'assets/images/cable.png',
                outputPerMin: 30,
                components: [
                    {name:'Wire', inputPerMinute: 60}
                ]
            },
            {
                name: 'Circuit Board',
                img: 'assets/images/circuit_board.png',
                outputPerMin: 10,
                components: [
                    {name:'Wire', inputPerMinute: 60},
                    {name:'Plastic', inputPerMinute: 30}
                ]
            },
            {
                name: 'Screw',
                img: 'assets/images/screw.png',
                outputPerMin: 40,
                components: [
                    {name:'Iron Rod', inputPerMinute: 10}
                ]
            },
            {
                name: 'Iron Rod',
                img: 'assets/images/iron_rod.png',
                outputPerMin: 15,
                components: [
                    {name:'Iron Ingot', inputPerMinute: 15}
                ]
            },
            {
                name: 'Wire',
                img: 'assets/images/wire.png',
                outputPerMin: 30,
                components: [
                    {name:'Copper Ingot', inputPerMinute: 15}
                ]
            },
            {
                name: 'Iron Ingot',
                img: 'assets/images/iron_ingot.png',
                outputPerMin: 30,
                components: [
                    {name:'Iron Ore', inputPerMinute: 30}
                ]
            },
            {
                name: 'Copper Ingot',
                img: 'assets/images/copper_ingot.png',
                outputPerMin: 30,
                components: [
                    {name:'Copper Ore', inputPerMinute: 30}
                ]
            },
            {
                name: 'Crude Oil',
                img: 'assets/images/crude_oil.png',
                outputPerMin: 120,
                components: null
            },
            {
                name: 'Iron Ore',
                img: 'assets/images/iron_ore.png',
                outputPerMin: 60,
                components: null
            },
            {
                name: 'Copper Ore',
                img: 'assets/images/copper_ore.png',
                outputPerMin: 60,
                components: null
            }
            
        ]
    }
}