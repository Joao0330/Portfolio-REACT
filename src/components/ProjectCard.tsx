import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ imgPath, title, description, extraInfo, githubLink, projectLink, techStack }: Project) => {
	return (
		<article className='projects__card'>
			<img src={imgPath} alt={title} className='img-fluid' />

			<div>
				<h4>{title}</h4>
				<p>{description}</p>
				{extraInfo && <p className='extra-info'>{extraInfo}</p>}
			</div>

			<div className='projects__card-bottom'>
				<div>
					{techStack.map(item => (
						<div>
							<img src={item.image} alt={item.name} />
							<span>{item.name}</span>
						</div>
					))}
				</div>

				<div>
					<a href={githubLink} target='_blank'>
						<span>View GitHub Repository</span>
						<FaGithub />
					</a>

					{projectLink && (
						<a href={projectLink} target='_blank'>
							<span>Live Preview</span>
							<FaExternalLinkAlt />
						</a>
					)}
				</div>
			</div>
		</article>
	);
};
