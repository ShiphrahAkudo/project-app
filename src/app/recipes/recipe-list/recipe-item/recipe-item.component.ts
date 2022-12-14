import { Component, OnInit,Input } from '@angular/core';
import {recipe} from '../../recipe.module';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipi: recipe;

  constructor( private recipeService: RecipeService) { }
  ngOnInit() {
  }
onSelected(){
  this.recipeService.recipeSelected.emit(this.recipi)

}
}
