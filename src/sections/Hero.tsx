import { IoMdDownload } from 'react-icons/io';
import { HeroStats } from '../components/HeroStats';
import { heroSocials, heroStats } from '../data';
import { HeroSocialIcons } from '../components/HeroSocialIcons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Hero = () => {
	useGSAP(() => {
		gsap.fromTo('.hero__left h2', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' });

		gsap.fromTo('.hero__left strong', { opacity: 0 }, { opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' });

		gsap.fromTo('.hero__stats', { x: 50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.6, duration: 1, delay: 1, ease: 'power2.inOut' });
	});

	return (
		<section className='hero' id='hero'>
			<div className='container'>
				<div className='hero__wrapper'>
					<div className='hero__left'>
						<strong>Web Developer</strong>

						<div>
							<h2>Hello, I'm</h2>
							<h2>João</h2>
							<h2>Rodrigues</h2>
						</div>
						<p>Web Developer | Frontend React Developer</p>

						<div className='hero__left-socials'>
							<button className='downloadCv-btn'>
								<span>Download CV</span>
								<IoMdDownload />
							</button>

							{heroSocials.map(item => (
								<HeroSocialIcons key={item.id} icon={item.icon} link={item.link} tooltip={item.tooltip} />
							))}
						</div>
					</div>

					<div className='hero__stats'>
						{heroStats.map(stat => (
							<HeroStats key={stat.title} value={stat.value} title={stat.title} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
