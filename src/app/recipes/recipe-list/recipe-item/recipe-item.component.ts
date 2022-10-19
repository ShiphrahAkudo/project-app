import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import {recipe} from '../../recipe.module';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipi: recipe;
 //@Output() selectedRecipe = new EventEmitter<void>();

  constructor( private recipeService: RecipeService) { }
  ngOnInit() {
  }
onSelected(){
  this.recipeService.recipeSelected.emit(this.recipi)

//this.selectedRecipe.emit();
}
}
