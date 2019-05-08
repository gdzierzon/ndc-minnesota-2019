import { Category } from './../models/category';
import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories()
    .subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => console.log(error)
    );
  }

}
