import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe 02', 'Lorem ipsum dolor sit amet', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
