export interface Category {
	id: string;
	name: string;
	icon: string | null;
	color: string | null;
	created_at: string;
}
export interface Expense {
	id: string;
	user_id: string;
	category_id: string | null;
	title: string;
	amount: number;
	date: string;
	description: string | null;
	payment_method: string | null;
	created_at: string;
	updated_at: string;
}
export interface CreateExpenseInput {
	category_id: string | null;
	title: string;
	amount: number;
	date: string;
	description: string | null;
	payment_method: string | null;
}
export interface UpdateExpenseInput {
	id: string;
	category_id?: string | null;
	title?: string;
	amount?: number;
	date?: string;
	description?: string | null;
	payment_method?: string | null;
}
export interface ExpenseCardProps {
	id: string;
	title: string;
	amount: number;
	date: string;
}
