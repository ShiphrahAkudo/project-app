import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<recipe>();
recipes: recipe[];
       
  constructor(private recipeService: RecipeService) { 
    this.recipes= this.recipeService.getRecipe();
  }

  ngOnInit() {
  }
//onRecipeSelected(recipi: recipe){this.recipeWasSelected.emit(recipi);
//}
}