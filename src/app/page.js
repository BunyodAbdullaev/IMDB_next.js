import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
	// Safely handle searchParams to avoid errors
	const genre = searchParams?.genre || 'fetchTrending';

	try {
		// Make the API request
		const response = await fetch(
			`https://api.themoviedb.org/3${
				genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
			}?api_key=${API_KEY}&language=en-US&page=1`,
			{
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjAxMjIwNDk4N2E1NjhhODIyMGVjN2I4OTZiYWNlOCIsIm5iZiI6MTczNzE0NTcxNy42NDcsInN1YiI6IjY3OGFiZDc1NzM3NzgyYWI1ZTcxMmVmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.II5a-Nff5YQooSL5gARh_y7E6fN0w7-18667bKvTlsU`,
				},
				next: { revalidate: 10 }, // Optional ISR revalidation
			}
		);

		// Check if the response is okay
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		// Parse the JSON data
		const data = await response.json();
		const results = data.results;

		// Render the results component
		return (
			<div>
				<Results results={results} />
			</div>
		);
	} catch (error) {
		console.error('Error fetching data:', error.message);

		// Return error message to the UI
		return <div>Error: {error.message}</div>;
	}
}
