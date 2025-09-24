import { useEffect, useState } from 'react';

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;

			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrolled]);

	const handleMobileMenuToggle = () => {
		setIsMobile(!isMobile);
	};

	return (
		<header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
			<div className='container'>
				<div className='navbar__wrapper'>
					<a href='#hero' className='navbar__logo'>
						<h1>João Rodrigues</h1>
						<span></span>
					</a>

					<nav className={isMobile ? 'active' : ''}>
						<ul>
							<li>
								<a href='#about'>About Me</a>
							</li>
							<li>
								<a href='#experience'>Experience</a>
							</li>
							<li>
								<a href='#projects'>Projects</a>
							</li>
							<li>
								<a href='#skills'>My Skills</a>
							</li>
						</ul>

						<div className='navbar__right'>
							<a href='#contact' className='contact-btn'>
								<span>Contact Me</span>
							</a>
						</div>
					</nav>

					<button className={`navbar__hamburger ${isMobile ? 'active' : ''}`} onClick={handleMobileMenuToggle}>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>

			<div className={`${isMobile ? 'overlay' : ''}`}></div>
		</header>
	);
};
