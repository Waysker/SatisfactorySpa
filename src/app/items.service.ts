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
                type: 'Manufacturer',
                recipes: [
                    {name:'Computer',outputPerMinute: 2.5,
                    components:[
                        {name:'Circuit Board', inputPerMinute: 25},
                        {name:'Cable', inputPerMinute: 22.5},
                        {name:'Plastic', inputPerMinute: 45},
                        {name:'Screw', inputPerMinute: 130}] }
                    
                ],
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
                type: 'Refinery',
                recipes:[
                    {name: 'Plastic', outputPerMinute: 20,
                    components: [
                        {name: 'Crude Oil', inputPerMinute: 30} 
                    ]}
                ],
                components: [
                    {name: 'Crude Oil', inputPerMinute: 30} 
                ]
            },
            {
                name: 'Cable',
                img: 'assets/images/cable.png',
                outputPerMin: 30,
                type: 'Constructor',
                recipes:[
                    {name: 'Cable', outputPerMinute: 30,
                    components: [
                        {name:'Wire', inputPerMinute: 60} 
                    ]},
                    {name: 'Coated Cable', outputPerMinute: 67.5,
                    components: [
                        {name:'Wire', inputPerMinute: 37.5},
                        {name:'Heavy Oil Residue', inputPerMinute: 15} 
                    ]},
                    {name: 'Insulated Cable', outputPerMinute: 100,
                    components: [
                        {name:'Wire', inputPerMinute: 45},
                        {name:'Rubber', inputPerMinute: 30} 
                    ]},
                    {name: 'Quickwire Cable', outputPerMinute: 27.5,
                    components: [
                        {name:'Quickwire', inputPerMinute: 7.5},
                        {name:'Rubber', inputPerMinute: 5} 
                    ]},
                ],
                components: [
                    {name:'Wire', inputPerMinute: 60}
                ]
            },
            {
                name: 'Circuit Board',
                img: 'assets/images/circuit_board.png',
                outputPerMin: 10,
                type: 'Manufacturer',
                recipes:[
                    {name: 'Circuit Board', outputPerMinute: 20,
                    components: [
                        {name:'Wire', inputPerMinute: 60},
                        {name:'Plastic', inputPerMinute: 30} 
                    ]}
                ],
                components: [
                    {name:'Wire', inputPerMinute: 60},
                    {name:'Plastic', inputPerMinute: 30}
                ]
            },
            {
                name: 'Screw',
                img: 'assets/images/screw.png',
                outputPerMin: 40,
                type: 'Constructor',
                recipes:[
                    {name: 'Screw', outputPerMinute: 20,
                    components: [
                        {name:'Iron Rod', inputPerMinute: 10} 
                    ]}
                ],
                components: [
                    {name:'Iron Rod', inputPerMinute: 10}
                ]
            },
            {
                name: 'Iron Rod',
                img: 'assets/images/iron_rod.png',
                outputPerMin: 15,
                type: 'Constructor',
                recipes:[
                    {name: 'Iron Rod', outputPerMinute: 20,
                    components: [
                        {name:'Iron Ingot', inputPerMinute: 15} 
                    ]}
                ],
                components: [
                    {name:'Iron Ingot', inputPerMinute: 15}
                ]
            },
            {
                name: 'Wire',
                img: 'assets/images/wire.png',
                outputPerMin: 30,
                type: 'Constructor',
                recipes:[
                    {name: 'Wire', outputPerMinute: 20,
                    components: [
                        {name:'Copper Ingot', inputPerMinute: 15}
                    ]},
                    {name: 'Iron Wire', outputPerMinute: 22.5,
                    components: [
                        {name:'Iron Ingot', inputPerMinute: 12.5}
                    ]},
                    {name: 'Caterium Wire', outputPerMinute: 120,
                    components: [
                        {name:'Caterium Ingot', inputPerMinute: 15}
                    ]},
                    {name: 'Fused Wire', outputPerMinute: 90,
                    components: [
                        {name:'Copper Ingot', inputPerMinute: 12},
                        {name:'Caterium Ingot', inputPerMinute: 3}
                    ]}
                ],
                components: [
                    {name:'Copper Ingot', inputPerMinute: 15}
                ]
            },
            {
                name: 'Iron Ingot',
                img: 'assets/images/iron_ingot.png',
                outputPerMin: 30,
                type: 'Smelter',
                recipes:[
                    {name: 'Iron Ingot', outputPerMinute: 20,
                    components: [
                        {name:'Iron Ore', inputPerMinute: 30}
                    ]}
                ],
                components: [
                    {name:'Iron Ore', inputPerMinute: 30}
                ]
            },
            {
                name: 'Copper Ingot',
                img: 'assets/images/copper_ingot.png',
                outputPerMin: 30,
                type: 'Smelter',
                recipes:[
                    {name: 'Copper Ingot', outputPerMinute: 20,
                    components: [
                        {name:'Copper Ore', inputPerMinute: 30}
                    ]}
                ],
                components: [
                    {name:'Copper Ore', inputPerMinute: 30}
                ]
            },
            {
                name: 'Crude Oil',
                img: 'assets/images/crude_oil.png',
                type: 'Oil Extractor',
                recipes:[
                    {name: 'Crude Oil', outputPerMinute: 20,
                    components: null}
                ],
                outputPerMin: 120,
                components: null
            },
            {
                name: 'Iron Ore',
                img: 'assets/images/iron_ore.png',
                type: 'Mine',
                outputPerMin: 60,
                recipes:[
                    {name: 'Iron Ore', outputPerMinute: 20,
                    components: null}
                ],
                components: null
            },
            {
                name: 'Copper Ore',
                img: 'assets/images/copper_ore.png',
                type: 'Mine',
                recipes:[
                    {name: 'Copper Ore', outputPerMinute: 20,
                    components: null}
                ],
                outputPerMin: 60, 
                components: null
            }
            
        ]
    }
}