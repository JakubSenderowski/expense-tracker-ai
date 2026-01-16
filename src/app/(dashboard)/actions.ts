'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import type { CreateExpenseInput } from '@/types/database';
import type { UpdateExpenseInput } from '@/types/database';
export async function createExpense(data: CreateExpenseInput) {
	const supabase = await createClient();

	const { error } = await supabase
		.from('expenses')
		.insert({ ...data, user_id: '00000000-0000-0000-0000-000000000000' });

	if (error) {
		return { error: error.message };
	}

	revalidatePath('/');

	return { success: true };
}

export async function deleteExpense(id: string) {
	const supabase = await createClient();
	const { error } = await supabase.from('expenses').delete().eq('id', id);
	if (error) {
		return { error: error.message };
	}

	revalidatePath('/');
	return { success: true };
}

export async function updateExpense(data: UpdateExpenseInput) {
	const supabase = await createClient();

	const { id, ...updateData } = data;

	const { error } = await supabase.from('expenses').update(updateData).eq('id', id);

	if (error) {
		return { error: error.message };
	}

	revalidatePath('/');
	return { success: true };
}
