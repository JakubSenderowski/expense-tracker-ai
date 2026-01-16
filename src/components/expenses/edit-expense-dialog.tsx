'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { updateExpense } from '@/app/(dashboard)/actions';

interface EditExpenseDialogProps {
	id: string;
	title: string;
	amount: number;
	date: string;
}
export function EditExpenseDialog({ title, amount, date, id }: EditExpenseDialogProps) {
	console.log('EditExpenseDialog rendered', { title, amount, date, id });
	A;
	const [open, setOpen] = useState(false);

	const [editTitle, setEditTitle] = useState(title);
	const [editAmount, setEditAmount] = useState(amount.toString());
	const [editDate, setEditDate] = useState(date);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			id: id,
			title: editTitle,
			amount: parseFloat(editAmount),
			date: editDate,
		};
		const result = await updateExpense(data);
		if (result.error) {
			console.error(result.error);
		}
		if (result.success) {
			setOpen(false);
		}
	};
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>+ Edytuj wydatek</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edytuj bieżący wydatek</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<Label htmlFor='title'>Tytuł</Label>
						<Input
							id='title'
							required
							type='text'
							placeholder='np. Zakupy w Biedronce'
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
						/>
					</div>

					<div>
						<Label htmlFor='amount'>Kwota</Label>
						<Input
							id='amount'
							required
							type='number'
							step='0.01'
							min='0'
							placeholder='np. 49.99'
							value={editAmount}
							onChange={(e) => setEditAmount(e.target.value)}
						/>
					</div>

					<div>
						<Label htmlFor='date'>Data</Label>
						<Input
							id='date'
							required
							type='date'
							value={editDate}
							onChange={(e) => setEditDate(e.target.value)}
						/>
					</div>

					<Button type='submit' className='w-full'>
						Edytuj
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
