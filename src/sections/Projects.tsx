import { projects } from '../data';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
	const projectsRef = useRef(null);

	useGSAP(() => {
		const cards = gsap.utils.toArray('.projects__card');

		cards.forEach(card => {
			gsap.fromTo(
				card as HTMLElement,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					scrollTrigger: {
						trigger: card as HTMLElement,
						start: 'top bottom-=100',
					},
				},
			);
		});
	}, []);

	return (
		<section className='projects' id='projects' ref={projectsRef}>
			<div className='container'>
				<h3>
					Featured <span>Projects</span>
				</h3>

				<div className='projects__wrapper'>
					{projects.map(project => (
						<ProjectCard
							imgPath={project.imgPath}
							title={project.title}
							description={project.description}
							extraInfo={project.extraInfo}
							githubLink={project.githubLink}
							projectLink={project.projectLink}
							techStack={project.techStack}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
