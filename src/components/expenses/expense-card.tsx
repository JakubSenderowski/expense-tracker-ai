'use client';
import { deleteExpense } from '@/app/(dashboard)/actions';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { ExpenseCardProps } from '@/types/database';
import { EditExpenseDialog } from './edit-expense-dialog';
export function ExpenseCard({ title, amount, date, id }: ExpenseCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{amount} zł</p>
			</CardContent>
			<CardFooter>
				<p>{new Date(date).toLocaleDateString('pl-PL')}</p>
				<Button onClick={() => deleteExpense(id)}>Usuń</Button>
				<EditExpenseDialog id={id} title={title} amount={amount} date={date} />
			</CardFooter>
		</Card>
	);
}
