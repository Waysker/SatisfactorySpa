import { Injectable } from '@angular/core';
import { IItem } from './item';

@Injectable({
    providedIn:'root'
})

export class ItemsService{

    getItems(): IItem[]{
        return [{
                value: 'Computer',
                img: 'assets/images/computer.png',
                components: [
                    'Circuit Board',
                    'Cable',
                    'Plastic',
                    'Screw',
                ]
            },
            {
                value: 'Plastic',
                img: 'assets/images/plastic.png',
                components: [
                    'Crude Oil'
                ]
            },
            {
                value: 'Cable',
                img: 'assets/images/cable.png',
                components: [
                    'Wire'
                ]
            },
            {
                value: 'Circuit Board',
                img: 'assets/images/circuit_board.png',
                components: [
                    'Wire',
                    'Plastic'
                ]
            },
            {
                value: 'Screw',
                img: 'assets/images/screw.png',
                components: [
                    'Wire',
                    'Iron Rod'
                ]
            },
            {
                value: 'Iron Rod',
                img: 'assets/images/iron_rod.png',
                components: [
                    'Iron Ingot'
                ]
            },
            {
                value: 'Wire',
                img: 'assets/images/wire.png',
                components: [
                    'Copper Ingot'
                ]
            },
            {
                value: 'Iron Ingot',
                img: 'assets/images/iron_ingot.png',
                components: [
                    'Iron Ore'
                ]
            },
            {
                value: 'Copper Ingot',
                img: 'assets/images/copper_ingot.png',
                components: [
                    'Copper Ore'
                ]
            },
            {
                value: 'Crude Oil',
                img: 'assets/images/crude_oil.png',
                components: null
            },
            {
                value: 'Iron Ore',
                img: 'assets/images/iron_ore.png',
                components: null
            },
            {
                value: 'Copper Ore',
                img: 'assets/images/copper_ore.png',
                components: null
            }
            
        ]
    }
}