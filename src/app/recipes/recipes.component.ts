import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipeSelected: recipe;
  constructor() { }

  ngOnInit(): void {
  }
  

}
