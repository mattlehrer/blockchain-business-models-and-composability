import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	return {
		path: url.pathname.slice(1),
	};
};
