import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Profile = () => {
	const card1Ref = useRef(null);
	const card2Ref = useRef(null);
	const card3Ref = useRef(null);

	useGSAP(() => {
		const rightCards = [card2Ref.current, card3Ref.current];

		gsap.fromTo(
			card1Ref.current,
			{ x: -50, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: card1Ref.current,
					start: 'top bottom-=100',
				},
			},
		);

		rightCards.forEach(card => {
			gsap.fromTo(
				card,
				{ x: 50, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					stagger: 0.2,
					duration: 1,
					delay: 1,
					scrollTrigger: {
						trigger: card,
						start: 'top bottom-=100',
					},
				},
			);
		});
	}, []);

	return (
		<section className='profile'>
			<div className='container'>
				<h3>Profile</h3>

				<div className='profile__wrapper'>
					<div ref={card1Ref}>
						<h4>Frontend Developer who has built multiple clean and intuitive web applications with backend integration.</h4>
					</div>
					<div ref={card2Ref}>
						<h4>Fluent in Portuguese and English</h4>
					</div>
					<div ref={card3Ref}>
						<div>
							<h4>My primary tech stack:</h4>
							<strong>React JS</strong>
						</div>
						<div>
							<span>Typescript</span>
							<span>CSS</span>
							<span>node JS / Fastify</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
