export interface IItem{
    name: string;
    img: string
    components: IComponent[]
    recipes: IRecipe[]
    outputPerMin: number
    type: recipeType
}


export interface IComponent{
    name: string;
    inputPerMinute: number;
}

export interface IRecipe{
    name: string
    outputPerMinute: number
    components: IComponent[]
}
type recipeType = 'Manufacturer' | 'Constructor' | 'Assembler' | 'Refinery' | 'Mine' | 'Smelter' | 'Oil Extractor'