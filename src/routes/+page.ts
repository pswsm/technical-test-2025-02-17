import type { Device } from '$lib/device/domain/Device';
import { DomainMapper } from '$lib/device/infra/DomainMapper';
import type { ApiSku } from '$lib/types/ApiSku';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const skus: ApiSku[] = await fetch('https://test.alexphone.com/api/v1/skus').then((data) =>
		data.json()
	);

	const devices: Device[] = skus.map((sku) => DomainMapper.toDomain(sku));
	return {
		devices
	};
};
