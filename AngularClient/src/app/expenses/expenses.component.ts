import { Category } from './../models/category';
import { Expense } from '../models/expense';
import { CategoriesService } from './../categories/categories.service';
import { UsersService } from './../users/users.service';
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  users: User[] = [];
  categories: Category[] = [];
  expenses: Expense[] = [];
  page = 1;
  size = 5;

  constructor(private expenseService: ExpenseService,
              private userService: UsersService,
              private categoryService: CategoriesService) { }

  ngOnInit() {
    this.getUsers();
  }

  getExpenses() {
    this.expenseService.getExpensesPage(this.page, this.size)
    .subscribe(
      (response) => {
        this.expenses = response;
        this.expenses.forEach(expense => {
          expense.user = this.users.find(user => user.userId === expense.userId);
          expense.category = this.categories.find(category => category.categoryId === expense.categoryId);
          // this.userService.getUser(expense.userId).subscribe(userResponse => expense.user = userResponse);
          // this.categoryService.getCategory(expense.categoryId).subscribe(categoryResponse => expense.category = categoryResponse);
        });
      }
    );
  }

  onPrevClick() {
    if (this.page <= 1) {
        return;
    }

    this.page--;
    this.getExpenses();
  }

  onNextClick() {
    if (this.expenses.length < this.size) {
        return;
    }

    this.page++;
    this.getExpenses();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      this.getCategories();
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
      this.getExpenses();
    });
  }
}
