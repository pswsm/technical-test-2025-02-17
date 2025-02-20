import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';
import { Device } from '$lib/device/domain/Device';
import { DomainMapper } from '$lib/device/infra/DomainMapper';
import type { CreateOrderBody } from '$lib/types/CreateOrderBody';

export const actions = {
	order: async ({ fetch, request }) => {
		// TODO: put order
		const formData = await request.formData();

		const cart = formData.get('cartState');
		if (!cart) {
			return fail(404, { cartData: false });
		}

		const stringDevices: string = atob(cart.toString());
		const devices: Device[] = JSON.parse(stringDevices).map((primitives: PrimitiveOf<Device>) =>
			Device.fromPrimitives(primitives)
		);

		const orderDevices = devices.map((device) => DomainMapper.toOrder(device));
		const orderBody: CreateOrderBody = { skus: orderDevices };

		const body = JSON.stringify(orderBody);
		console.log(body);
		const response = await fetch('https://test.alexphone.com/api/v1/order', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});

		return { status: response.ok };
	}
} satisfies Actions;
