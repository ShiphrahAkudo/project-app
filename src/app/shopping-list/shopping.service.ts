import { EventEmitter } from '@angular/core';
import {ingredient } from '../shared/ingredient.model'
export class ShoppingService {
    ingredientsChanged = new EventEmitter<ingredient[]>();
    private ingredients: ingredient[]= [
        new ingredient('Mushroom', 5),
        new ingredient('Strawberries', 4)
      
      ];
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ing: ingredient){
this.ingredients.push(ing);
this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}