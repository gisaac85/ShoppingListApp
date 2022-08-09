import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1','This is a simply test1','https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/02/18/16354-easy-meatloaf-mfs-74.jpg&w=1280&h=720&q=90&c=cc'),
    new Recipe('A Test Recipe2','This is a simply test2','https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'),
    new Recipe('A Test Recipe3','This is a simply test3','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=375,341')
  ];

  constructor() { }

  ngOnInit() {
  }

}
