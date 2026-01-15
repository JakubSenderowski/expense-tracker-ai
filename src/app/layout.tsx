import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Expense Tracker AI',
	description: 'Modern expense tracker with AI insights',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body>{children}</body>
		</html>
	);
}
