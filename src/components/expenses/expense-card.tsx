import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExpenseCardProps } from '@/types/database';
export function ExpenseCard({ title, amount, date }: ExpenseCardProps) {
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
			</CardFooter>
		</Card>
	);
}
