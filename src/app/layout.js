import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'IMDB Clone',
	description: 'This is a movie database clone',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<Header />
					<Navbar />
					<SearchBox />
					{children}
				</Providers>
			</body>
		</html>
	);
}
