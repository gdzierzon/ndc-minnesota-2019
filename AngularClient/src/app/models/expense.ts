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
}
