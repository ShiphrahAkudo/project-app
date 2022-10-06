import { Component, OnInit , Input} from '@angular/core';
import { recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipi: recipe;


  constructor() { }

  ngOnInit(): void {
  }

}
