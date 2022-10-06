import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {recipe} from '../../recipe.module';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipi: recipe;
 @Output() selectedRecipe = new EventEmitter<void>();

  constructor() { }
  ngOnInit() {
  }
onSelected(){
this.selectedRecipe.emit();
}
}
