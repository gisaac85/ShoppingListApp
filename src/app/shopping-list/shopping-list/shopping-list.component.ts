import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient('Apples',2),
    new Ingredient('Tomatoes',5),
    new Ingredient('Garlic',1),
    new Ingredient('Suger',2),
    new Ingredient('Water',3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
