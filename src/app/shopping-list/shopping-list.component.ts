import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredient[]=[
  new ingredient('Mushroom', 5),
  new ingredient('Strawberries', 4)

];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ing: ingredient){
    this.ingredients.push(ing);

  }

}
