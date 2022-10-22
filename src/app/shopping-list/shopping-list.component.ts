import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[];
  constructor(private shoppingService: ShoppingService,
    private router: Router, private route: ActivatedRoute){}


  ngOnInit(){
  this.ingredients = this.shoppingService.getIngredients();
  this.shoppingService.ingredientsChanged.subscribe((ing:ingredient[])=>{
  this.ingredients = ing
  });
  }
onReload(){
  //this.router.navigate(['ShoppingList'], {relativeTo: this.route});
}
}
