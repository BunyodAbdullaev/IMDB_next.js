import Image from 'next/image';

export default async function MoviePage({ params }) {
	const movieId = params.id;

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
		{
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjAxMjIwNDk4N2E1NjhhODIyMGVjN2I4OTZiYWNlOCIsIm5iZiI6MTczNzE0NTcxNy42NDcsInN1YiI6IjY3OGFiZDc1NzM3NzgyYWI1ZTcxMmVmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.II5a-Nff5YQooSL5gARh_y7E6fN0w7-18667bKvTlsU`,
			},
		}
	);
	const movie = await res.json();

	console.log('movie: ', movie);
	return (
		<div className='w-full'>
			<div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
				<Image
					src={`https://image.tmdb.org/t/p/w500${
						movie.backdrop_path || movie.poster_path
					}`}
					width={500}
					height={300}
					alt={movie.name}
					className='rounded-lg'
					style={{ maxWidth: '100% , height:100%' }}
				></Image>
				<div className='p-2'>
					<h2 className='text-lg mb-3'>{movie.title || movie.name}</h2>
					<p className='text-lg mb-3'>{movie.overview}</p>
					<p className='mb-3'>
						<span className='font-semibold mr-1'>Date Released:</span>
						{movie.release_date || movie.first_air_date}{' '}
					</p>
					<p className='mb-3'>
						<span className='font-semibold mr-1'>Rating:</span>
						{movie.vote_count}
					</p>
				</div>
			</div>
		</div>
	);
}
