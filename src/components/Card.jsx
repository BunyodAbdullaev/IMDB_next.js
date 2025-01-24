import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ results }) {
	console.log('results: ', results);
	return (
		<div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
			<Link href={`/movie/${results.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/w500${
						results.backdrop_path || results.poster_path
					}`}
					width={500}
					height={300}
					alt={'bunyod'}
					className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
				></Image>
				<div className='p-2'>
					<p className='line-clamp-2 text-md'>{results.overview}</p>
					<h2 className='text-lg font-bold truncate'>
						{results.title || results.name}
					</h2>
					<p className='flex items-center'>
						{results.release_date || results.first_air_date}
						<FiThumbsUp className='h-5 mr-1 ml-3' />
						{results.vote_count}
					</p>
				</div>
			</Link>
		</div>
	);
}
