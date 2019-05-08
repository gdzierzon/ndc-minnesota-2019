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

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl);
  }

  addExpense(expense: Expense): Observable<void> {
    return this.http.post<void>(this.expensesUrl, expense);
  }

}
