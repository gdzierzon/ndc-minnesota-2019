import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { UsersService } from 'src/app/users/users.service';
import { CategoriesService } from 'src/app/categories/categories.service';
import { User } from 'src/app/models/user';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-insert',
  templateUrl: './expense-insert.component.html',
  styleUrls: ['./expense-insert.component.css']
})
export class ExpenseInsertComponent implements OnInit {
  users: User[] = [];
  categories: Category[] = [];
  expense: Expense = new Expense();
  selectedValue: number;

  constructor(private expenseService: ExpenseService,
              private userService: UsersService,
              private categoryService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.getCategories();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      this.expense.userId = this.users[0].userId;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
      this.expense.categoryId = this.categories[0].categoryId;
    });
  }

  onSubmit() {
    this.expenseService.addExpense(this.expense)
    .subscribe(
      (response) => {
        this.router.navigate(['/expenses']);
      },
      (error) => console.log(error)
    );
  }

}
