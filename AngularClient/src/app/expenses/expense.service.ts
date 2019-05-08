import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesUrl = 'https://localhost:44370/api/expenses';

  constructor(private http: HttpClient) { }

  getExpensesPage(page: number, size: number): Observable<Expense[]> {
    const url = `${this.expensesUrl}/page/?page=${page}&size=${size}`;
    return this.http.get<Expense[]>(url);
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl);
  }

  addExpense(expense: Expense): Observable<void> {
    return this.http.post<void>(this.expensesUrl, expense);
  }

}
