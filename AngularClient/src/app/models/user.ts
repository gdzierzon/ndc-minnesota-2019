import { Expense } from './expense';
export class User {
    id: number;
    firstName: string;
    lastName: string;

    budgetItems?: Expense[];
}
