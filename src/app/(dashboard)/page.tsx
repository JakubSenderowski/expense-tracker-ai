import { createClient } from '@/lib/supabase/server';
import { AddExpenseDialog } from '@/components/expenses/add-expense-dialog';
import { ExpenseCard } from '@/components/expenses/expense-card';
export default async function DashboardPage() {
	const supabase = await createClient();

	const { data: categories } = await supabase.from('categories').select('*');
	const { data: expenses } = await supabase.from('expenses').select('*');
	if (!expenses || expenses.length === 0) {
		return (
			<div>
				<span>Brak wydatków</span>
			</div>
		);
	}
	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

			<div className='mb-8'>
				<h2 className='text-xl font-semibold mb-4'>Kategorie:</h2>
				<div className='flex gap-2 flex-wrap'>
					{categories?.map((category) => (
						<span
							key={category.id}
							className='px-3 py-1 rounded-full text-sm'
							style={{ backgroundColor: category.color || '#gray' }}>
							{category.icon} {category.name}
						</span>
					))}
				</div>
			</div>
			<div className='flex justify-between'>
				<h2 className='text-xl font-semibold mb-4'>Wydatki:</h2>
				<AddExpenseDialog />
			</div>
			<div className='space-y-4'>
				{expenses.map((expense) => (
					<ExpenseCard key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
				))}
			</div>
		</div>
	);
}
