import { Device } from '$lib/device/domain/Device';
import { DomainMapper } from '$lib/device/infra/DomainMapper';
import type { ApiSku } from '$lib/types/ApiSku';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const slugSku = params.slug;
	const apiRequest = await fetch(`https://test.alexphone.com/api/v1/sku/${slugSku}`);

	if (apiRequest.status != 200) {
		error(404, { message: `Invalid SKU: ${slugSku}` });
	}
	const apiSku: ApiSku = await apiRequest.json();
	const device: PrimitiveOf<Device> = DomainMapper.toDomain(apiSku).toPrimitives();

	return { device };
};
