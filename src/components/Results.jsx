export default function Results({ results }) {
	return (
		<div>
			{results.map((results) => (
				<div key={results.id}>
					<h2>{results.overview}</h2>
				</div>
			))}
		</div>
	);
}
