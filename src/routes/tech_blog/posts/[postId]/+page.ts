import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params) {
        return params;
	}

	error(404, 'Not found');
};