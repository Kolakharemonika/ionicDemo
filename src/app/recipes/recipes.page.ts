import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipesService } from './recipes.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeSubs = Subscription;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // this.recipeSubs = this.recipesService.showRecipes().subscribe(res => {
    //   console.log(res);
    //   this.recipes = res;

    // });
    this.recipes = this.recipesService.getAllRecipes();


  }
  ngOnDestroy() {
    // this.recipeSubs.
  }
}
