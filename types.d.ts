type Banner = {
	title: string;
};

type Home = {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
	projects: ProjectItem[];
	repositories: RepositoryItem[];
};

type Layout = { children: React.ReactNode };

type Meta = {
	title: string;
	description: string;
	keywords: string;
};

type Project = {
	project: {
		id: number;
		name: string;
		url: string;
	};
};

type ProjectItem = {
	id: number;
	name: string;
	url: string;
};

type ProjectsList = {
	projects: ProjectItem[];
};

type Repository = {
	repository: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	};
};

type RepositoryItem = {
	id: number;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
	html_url: string;
};

type RepositoriesList = {
	repositories: RepositoryItem[];
};

type User = {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
};
