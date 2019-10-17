import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
/*
import { Component } from '@angular/core';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list-component.css']
})
export class RecipesListComponent {}
*/
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list-component.css']

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  OnNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
