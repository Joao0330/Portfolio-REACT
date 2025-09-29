import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const HeroSocialIcons = ({ icon, tooltip, link }: HeroSocials) => {
	let iconLogo: React.JSX.Element = <></>;

	switch (icon) {
		case 'FaGithub':
			iconLogo = <FaGithub />;
			break;
		case 'FaLinkedinIn':
			iconLogo = <FaLinkedinIn />;
			break;
	}

	return (
		<div>
			<a href={link} target='_blank'>
				{iconLogo}
			</a>
			<span className='hero-tooltip'>{tooltip}</span>
		</div>
	);
};
