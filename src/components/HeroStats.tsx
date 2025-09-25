export const HeroStats = ({ value, title }: HeroStats) => {
	return (
		<div className='hero__stats-card'>
			<strong>{value}</strong>
			<p>{title}</p>
		</div>
	);
};
