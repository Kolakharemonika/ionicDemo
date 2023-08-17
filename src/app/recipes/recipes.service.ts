import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'burger',
      imgUrl: 'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=740&t=st=1692269640~exp=1692270240~hmac=8ddea90d45308d204b222889c17c31bf512dba04f332ef4a0aac44b3912726c6'
      , ingedients: ['potatoes', 'cabbage', 'tomato'],
    },
    {
      id: 'r2',
      title: 'pizza',
      imgUrl: 'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=740&t=st=1692269640~exp=1692270240~hmac=8ddea90d45308d204b222889c17c31bf512dba04f332ef4a0aac44b3912726c6'
      , ingedients: ['paneer', 'chilli flex', 'white sause'],
    }
  ]
  constructor() { }

  getAllRecipes() {
    return [...this.recipes]; //copy of recipe
  }

  getRecipe(recipeId: string) {
    return this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  }
}
