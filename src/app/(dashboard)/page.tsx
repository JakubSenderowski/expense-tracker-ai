import { createClient } from '@/lib/supabase/server';

export default async function DashboardPage() {
	const supabase = await createClient();

	const { data: categories } = await supabase.from('categories').select('*');

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

			<div>
				<h2 className='text-xl font-semibold mb-4'>Wydatki:</h2>
				<p className='text-gray-500'>Brak wydatków (dodamy to za chwilę)</p>
			</div>
		</div>
	);
}
