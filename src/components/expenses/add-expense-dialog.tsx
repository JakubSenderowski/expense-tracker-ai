'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AddExpenseDialog() {
	const [open, setOpen] = useState(false);

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
	const [categoryId, setCategoryId] = useState('');
	const [description, setDescription] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = {
			title,
			amount: parseFloat(amount),
			date,
			category_id: categoryId || null,
			description: description || null,
			payment_method: paymentMethod || null,
		};

		console.log(data);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>+ Dodaj wydatek</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dodaj nowy wydatek</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<Label htmlFor='title'>Tytuł</Label>
						<Input
							id='title'
							required
							type='text'
							placeholder='np. Zakupy w Biedronce'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
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
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>

					<div>
						<Label htmlFor='date'>Data</Label>
						<Input id='date' required type='date' value={date} onChange={(e) => setDate(e.target.value)} />
					</div>

					<div>
						<Label htmlFor='description'>Opis (opcjonalnie)</Label>
						<Input
							id='description'
							type='text'
							placeholder='np. Zakupy spożywcze'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<Button type='submit' className='w-full'>
						Dodaj
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
