export interface IItem{
    name: string;
    img: string;
    components: IComponent[];
    outputPerMin: number;
}

export interface IComponent{
    name: string;
    inputPerMinute: number;
}