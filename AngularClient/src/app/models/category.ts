import { Expense } from './expense';
export class Category {
    categoryId: number;
    title: string;
    description: string;

    budgetItems?: Expense[];
}
