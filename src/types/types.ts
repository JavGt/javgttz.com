export type Technology = {
	_id: string;
	name: string;
	image: string;
};

export type Project = {
	_id: string;
	name: string;
	image: string;
	technologies: Technology[];
};

export type Social = {
	_id: string;
	name: string;
	link: string;
	icon: string;
};
