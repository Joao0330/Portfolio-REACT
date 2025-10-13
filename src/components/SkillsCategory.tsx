export const SkillsCategory = ({ category, skills }: SkillsCategories) => {
	return (
		<div className='skills__categories'>
			<h4>{category}</h4>

			<div className='skills__items'>
				{skills.map(skill => (
					<div>
						<img src={skill.icon} alt={skill.name} className='img-fluid' />
						<strong>{skill.name}</strong>
					</div>
				))}
			</div>
		</div>
	);
};
