import { Expense } from './expense';
export class User {
    userId: number;
    firstName: string;
    lastName: string;

    budgetItems?: Expense[];
}
