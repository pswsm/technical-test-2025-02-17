import type { Device } from '$lib/device/domain/Device';
import { Grade } from '$lib/device/domain/value-objects/Grade';
import { DomainMapper } from '$lib/device/infra/DomainMapper';
import type { ApiSku } from '$lib/types/ApiSku';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const skus: ApiSku[] = await fetch('https://test.alexphone.com/api/v1/skus').then((data) =>
		data.json()
	);

	const params = url.searchParams;
	const devices: Device[] = skus.map((sku) => DomainMapper.toDomain(sku));
	const prices: number[] = devices.map((dev) => dev.getPrice().valueOf());
	const grades = new Set(devices.map((dev) => dev.getGrade().valueOf()));
	const visibleDevices: Device[] = devices
		.filter(
			(dev) => params.get('grade') === 'none' || params.get('grade') === dev.getGrade().valueOf()
		)
		.filter((dev) => Number(params.get('from')) <= dev.getPrice().valueOf())
		.filter((dev) => Number(params.get('to')) >= dev.getPrice().valueOf());
	return {
		params,
		maxPrice: Math.max(...prices),
		minPrice: Math.min(...prices),
		grades: Array.from(grades).map((grade) => new Grade(grade)),
		visibleDevices
	};
};
