import type { Device } from '$lib/device/domain/Device';
import { DomainMapper } from '$lib/device/infra/DomainMapper';
import type { ApiSku } from '$lib/types/ApiSku';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const slugSku = params.slug;
	const apiSku: ApiSku = await fetch(`https://test.alexphone.com/api/v1/sku/${slugSku}`).then(
		(data) => data.json()
	);

	const device: Device = DomainMapper.toDomain(apiSku);

	return { device };
};
