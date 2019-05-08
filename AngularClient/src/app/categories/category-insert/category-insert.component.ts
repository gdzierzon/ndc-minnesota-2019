import { CategoriesService } from './../categories.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent implements OnInit {
  category: Category = new Category();

  constructor(private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.categoriesService.addCategory(this.category)
    .subscribe(
      (response) => {
        this.router.navigate(['/categories']);
      },
      (error) => console.log(error)
    );
  }

}
