import { Component, OnInit , Input} from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipi: recipe;


  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
this.recipeService.addIngredientToShoppingList(this.recipi.ingredients);
  }

}
