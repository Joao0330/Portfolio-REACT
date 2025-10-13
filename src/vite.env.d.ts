interface NavLink {
	title: string;
	link: string;
}

interface HeroStats {
	title: string;
	value: string;
}

interface HeroSocials {
	id?: number;
	icon: string;
	tooltip: string;
	link: string;
}

interface TechItems {
	image: string;
	name: string;
}

interface Project {
	imgPath: string;
	title: string;
	description: string;
	extraInfo: string | null;
	projectLink: string | null;
	techStack: TechItems[];
	githubLink: string;
}

interface SkillsItem {
	name: string;
	icon: string;
}

interface SkillsCategories {
	category: string;
	skills: SkillsItem[];
}
