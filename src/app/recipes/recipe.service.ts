import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

 private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('Tasty Scnitzel',
    'A supe tasty scnitzel - just awesome!',
    'https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]
  ),
    // tslint:disable-next-line: max-line-length
    new Recipe('Big Fat Burger',
    'What else you need to say?',
    'https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     [
       new Ingredient('Buns', 2),
       new Ingredient('Meat', 1)
     ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
