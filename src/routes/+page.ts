import type { ApiSku } from '$lib/types/ApiSku';
import type { PageData } from './$types';

export const load: PageData = async () => {
	const skus: ApiSku[] = await fetch('https://test.alexphone.com/api/v1/skus').then((data) =>
		data.json()
	);
	return {
		skus
	};
};
