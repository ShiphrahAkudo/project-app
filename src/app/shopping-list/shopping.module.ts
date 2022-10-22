import { ingredient } from "../shared/ingredient.model";

export class shopplingList {
   
    public ingredients: ingredient[];

 constructor(ingredients:ingredient[]){
this.ingredients = ingredients;
}
}