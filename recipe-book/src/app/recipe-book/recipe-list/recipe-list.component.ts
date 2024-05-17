import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Test recipe', 'https://media.istockphoto.com/id/652225084/es/foto/espagueti-bolo%C3%B1esa-en-un-plato-blanco.jpg?s=2048x2048&w=is&k=20&c=JI8WtY5mZtC9x3i7c50wkAkeNQLfWmqYx1iEINYc0CY='),
    new Recipe('Spaghetti', 'Test recipe', 'https://media.istockphoto.com/id/652225084/es/foto/espagueti-bolo%C3%B1esa-en-un-plato-blanco.jpg?s=2048x2048&w=is&k=20&c=JI8WtY5mZtC9x3i7c50wkAkeNQLfWmqYx1iEINYc0CY='),
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
