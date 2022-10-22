import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { headerComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DropdownDirective } from './shared/dropdownDirective';
import {ShoppingService} from './shopping-list/shopping.service';
import { HomepageComponent } from './homepage/homepage.component';
 import { Routes, RouterModule} from '@angular/router';
 const appRoutes: Routes= [
  { path: '', component: HomepageComponent},
  {path: 'Recipe', component: RecipesComponent},
  {path: 'ShoppingList', component: ShoppingListComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    DropdownDirective,
    HomepageComponent
  
  ],

  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
