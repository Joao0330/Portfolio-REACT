import { IoMdDownload } from 'react-icons/io';
import { HeroStats } from '../components/HeroStats';
import { heroSocials, heroStats } from '../data';
import { HeroSocialIcons } from '../components/HeroSocialIcons';

export const Hero = () => {
	return (
		<section className='hero'>
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
								<HeroSocialIcons icon={item.icon} link={item.link} tooltip={item.tooltip} />
							))}
						</div>
					</div>

					<div className='hero__stats'>
						{heroStats.map(stat => (
							<HeroStats value={stat.value} title={stat.title} />
						))}
					</div>
					{/* TODO: Add gsap animations, make this section responsive */}
				</div>
			</div>
		</section>
	);
};
