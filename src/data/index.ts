export const navLinks: NavLink[] = [
	{
		title: 'About',
		link: '#about',
	},
	{
		title: 'Projects',
		link: '#projects',
	},
	{
		title: 'My Skills',
		link: '#skills',
	},
];

export const heroStats: HeroStats[] = [
	{
		title: 'Age',
		value: '22',
	},
	{
		title: 'Years of Experience',
		value: '2+',
	},
	{
		title: 'Projects Worked on',
		value: '8',
	},
];

export const heroSocials: HeroSocials[] = [
	{
		id: 1,
		icon: 'FaGithub',
		tooltip: 'GitHub',
		link: 'https://github.com/Joao0330',
	},
	{
		id: 2,
		icon: 'FaLinkedinIn',
		tooltip: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jg-rodrigues/',
	},
];

export const projects: Project[] = [
	{
		imgPath: '/images/cineflix.png',
		title: 'Cineflix - Movie App',
		description:
			'A full-stack movie tracker app where the user can browse through movies, view details, and manage a personal favorite and watchlist. It also includes user authentication, profile management, and a role based system that includes regular users as well as admins and moderators who can ban users and manage content.',
		extraInfo: null,
		projectLink: 'https://cineflix-movie-app-client.onrender.com/home',
		techStack: [
			{
				image: '/images/icons/react.svg',
				name: 'React Js',
			},
			{
				image: '/images/icons/typescript.svg',
				name: 'Typescript',
			},
			{
				image: '/images/icons/tailwindcss.svg',
				name: 'Tailwind CSS',
			},
			{
				image: '/images/icons/shadcn.svg',
				name: 'ShadCN',
			},
			{
				image: '/images/icons/axios.svg',
				name: 'Axios',
			},
			{
				image: '/images/icons/postgresql.svg',
				name: 'PostgreSQL',
			},
			{
				image: '/images/icons/fastify.svg',
				name: 'Fastify',
			},
			{
				image: '/images/icons/prisma.svg',
				name: 'Prisma',
			},
		],
		githubLink: 'https://github.com/Joao0330/Cineflix-Movie-App',
	},
	{
		imgPath: '/images/nimbus.png',
		title: 'Nimbus - Weather App',
		description: 'This weather app features interactive maps and real-time data sourced from around the world.',
		extraInfo: null,
		projectLink: 'https://nimbus-msu3.onrender.com/',
		techStack: [
			{
				image: '/images/icons/react.svg',
				name: 'React JS',
			},
			{
				image: '/images/icons/typescript.svg',
				name: 'Typescript',
			},
			{
				image: '/images/icons/tailwindcss.svg',
				name: 'Tailwind CSS',
			},
			{
				image: '/images/icons/axios.svg',
				name: 'Axios',
			},
			{
				image: '/images/icons/fastify.svg',
				name: 'Fastify',
			},
		],
		githubLink: 'https://github.com/Joao0330/Nimbus-Weather-App',
	},
	{
		imgPath: '/images/newsly.png',
		title: 'Newsly - A News browsing app',
		description: 'Newsly allows you to browse through the latest news articles from various genres, or search for a specific topic.',
		extraInfo: '*Due to API limitations, the app is not available for live preview. To check it out, please visit the GitHub repository, follow the instructions and run it yourself.*',
		projectLink: null,
		techStack: [
			{
				image: '/images/icons/html.svg',
				name: 'HTML5',
			},
			{
				image: '/images/icons/sass.svg',
				name: 'Sass',
			},
			{
				image: '/images/icons/javascript.svg',
				name: 'Javascript',
			},
		],
		githubLink: 'https://github.com/Joao0330/Newsly-vanillaJs-news-project',
	},
	{
		imgPath: '/images/clinica.png',
		title: 'Clinica - A Medical Website',
		description:
			'This web application was developed as a final project for the backend part of the FLAG full-stack web development course, simulates a medical clinic website with functionalities such as user registration, appointment scheduling, and multiple user roles.',
		extraInfo: '*Since this was a backend project, the focus was primarily on backend development, resulting in a basic site with limited functionality*',
		projectLink: 'https://projeto-backend-clinica-client.onrender.com/',
		techStack: [
			{
				image: '/images/icons/react.svg',
				name: 'React JS',
			},
			{
				image: '/images/icons/typescript.svg',
				name: 'Typescript',
			},
			{
				image: '/images/icons/sass.svg',
				name: 'Sass',
			},
			{
				image: '/images/icons/axios.svg',
				name: 'Axios',
			},
			{
				image: '/images/icons/fastify.svg',
				name: 'Fastify',
			},
			{
				image: '/images/icons/mysql.svg',
				name: 'MySQL',
			},
			{
				image: '/images/icons/prisma.svg',
				name: 'Prisma',
			},
		],
		githubLink: 'https://github.com/Joao0330/projeto-backend-clinica',
	},
	{
		imgPath: '/images/technexus.jpg',
		title: 'TechNexus - E-commerce Website',
		description:
			'An e-commerce website developed as a final project for the front-end part of the FLAG full-stack web development course, featuring a modern and responsive design, product listings, a shopping cart, and a product editor where users can add, edit, and delete products.',
		extraInfo: null,
		projectLink: 'https://ecommerce-project-technexus-client.onrender.com/',
		techStack: [
			{
				image: '/images/icons/react.svg',
				name: 'React JS',
			},
			{
				image: '/images/icons/javascript.svg',
				name: 'Javascript',
			},
			{
				image: '/images/icons/sass.svg',
				name: 'Sass',
			},
		],
		githubLink: 'https://github.com/Joao0330/ecommerce-project-technexus',
	},
];

export const skillsCategories: SkillsCategories[] = [
	{
		category: 'frontend',
		skills: [
			{
				name: 'HTML5',
				icon: '/images/icons/html.svg',
			},
			{
				name: 'JavaScript',
				icon: '/images/icons/javascript.svg',
			},
			{
				name: 'TypeScript',
				icon: '/images/icons/typescript.svg',
			},
			{
				name: 'React',
				icon: '/images/icons/react.svg',
			},
			{
				name: 'CSS',
				icon: '/images/icons/css.svg',
			},
			{
				name: 'Sass',
				icon: '/images/icons/sass.svg',
			},
			{
				name: 'Tailwind CSS',
				icon: '/images/icons/tailwindcss.svg',
			},
		],
	},
	{
		category: 'backend',
		skills: [
			{
				name: 'Node.Js',
				icon: '/images/icons/nodejs.svg',
			},
			{
				name: 'Fastify',
				icon: '/images/icons/fastify.svg',
			},
		],
	},
	{
		category: 'database',
		skills: [
			{
				name: 'MySQL',
				icon: '/images/icons/mysql.svg',
			},
			{
				name: 'PostgreSQL',
				icon: '/images/icons/postgresql.svg',
			},
			{
				name: 'Prisma',
				icon: '/images/icons/prisma.svg',
			},
		],
	},
	{
		category: 'tools',
		skills: [
			{
				name: 'Git',
				icon: '/images/icons/git.svg',
			},
		],
	},
];
