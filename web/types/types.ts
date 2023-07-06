export type User = {
	id?: number;
	nombre?: string;
	email?: string;
	password?: string;
};

export type University = {
	id?: number;
	name?: string;
	description?: string;
	country?: string;
};

export type Favorite = {
	userId?: number;
	universityId?: number;
};
