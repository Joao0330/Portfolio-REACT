import { SkillsCategory } from '../components/SkillsCategory';
import { skillsCategories } from '../data';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
	const skillsRef = useRef(null);

	useGSAP(() => {
		const skillsItems = gsap.utils.toArray('.skills__categories');

		skillsItems.forEach(item => {
			gsap.fromTo(
				item as HTMLElement,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					scrollTrigger: {
						trigger: item as HTMLElement,
						start: 'top bottom-=100',
					},
				},
			);
		});
	}, []);

	return (
		<section className='skills' id='skills' ref={skillsRef}>
			<div className='container'>
				<h3>
					My Full <span>Tech Stack</span>
				</h3>

				<div className='skills__wrapper'>
					{skillsCategories.map(category => (
						<SkillsCategory category={category.category} skills={category.skills} />
					))}
				</div>
			</div>
		</section>
	);
};
