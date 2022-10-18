import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.module';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
recipeSelected: recipe;
  constructor() { }

  ngOnInit(): void {
  }
  

}
