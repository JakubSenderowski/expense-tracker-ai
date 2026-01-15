import { createClient } from '../lib/supabase/client';

export default async function Home() {
	const supabase = await createClient();

	const { data, error } = await supabase.from('categories').select('*');

	if (error) {
		console.error('Supabase error:', error);
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className='p-8'>
			<h1 className='text-2xl font-bold mb-4'>Test Supabase</h1>
			<ul className='list-disc pl-5'>
				{data?.map((category) => (
					<li key={category.id}>
						{category.icon} {category.name}
					</li>
				))}
			</ul>
		</div>
	);
}
