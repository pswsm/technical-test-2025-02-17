import { browser } from '$app/environment';
import { CartDevice } from '$lib/CartDevice/domain/CartDevice';
import { Device } from '$lib/device/domain/Device';
import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';
import type { UniqueId } from '$lib/shared/UniqueId';

export const CART_LOCALSTORAGE_KEY = 'cart';

export class CartState {
	public state: CartDevice[] = $state([]);

	constructor() {
		if (!browser) {
			return this;
		}
		const localStorageCart = localStorage.getItem(CART_LOCALSTORAGE_KEY);
		if (localStorageCart) {
			this.state = JSON.parse(atob(localStorageCart)).map((primitives: PrimitiveOf<CartDevice>) =>
				CartDevice.fromPrimitives(primitives)
			);
		}
	}

	public overwrite(newState: CartDevice[]): void {
		this.state = newState;
		if (browser) {
			localStorage.setItem(
				CART_LOCALSTORAGE_KEY,
				btoa(JSON.stringify(this.state.map((d) => d.toPrimitives())))
			);
		}
	}

	public push(cartId: UniqueId, device: Device): void {
		this.state.push(new CartDevice(cartId, device));
		if (browser) {
			localStorage.setItem(
				CART_LOCALSTORAGE_KEY,
				btoa(JSON.stringify(this.state.map((device) => device.toPrimitives())))
			);
		}
	}

	public remove(device: CartDevice): void {
		this.state = this.state.filter((dev) => !dev.getId().equals(device.getId()));
		if (browser) {
			localStorage.setItem(
				CART_LOCALSTORAGE_KEY,
				btoa(JSON.stringify(this.state.map((d) => d.toPrimitives())))
			);
		}
	}

	public flush(): void {
		this.state = [];
		if (browser) {
			localStorage.setItem(
				CART_LOCALSTORAGE_KEY,
				btoa(JSON.stringify(this.state.map((d) => d.toPrimitives())))
			);
		}
	}

	public toFormableData(): string {
		return btoa(JSON.stringify(this.state.map((cd) => cd.getDevice().toPrimitives())));
	}
}

export const GlobalCartState = new CartState();
