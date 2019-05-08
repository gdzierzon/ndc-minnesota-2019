import { User } from './user';
import { Category } from './category';
export class Expense {
    expenseId: number;
    userId: number;
    categoryId: number;
    date?: Date;
    amount?: number;
    title?: string;
    description?: string;
    vendor?: string;
    isBusinessExpense?: boolean;

    category?: Category;
    user?: User;

    constructor() {
        this.userId = 0;
        this.categoryId = 0;
        this.description = '';
        this.title = '';
        this.amount = 0;
        this.date = new Date();
        this.vendor = '';
        this.isBusinessExpense = false;
    }
}
