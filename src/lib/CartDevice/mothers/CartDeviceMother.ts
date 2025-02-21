import type { Device } from '$lib/device/domain/Device';
import { DeviceMother } from '$lib/device/mothers/DeviceMother';
import { UniqueId } from '$lib/shared/UniqueId';
import { CartDevice } from '../domain/CartDevice';

export class CartDeviceMother {
	public id = new UniqueId('nonrandomid');
	public device = DeviceMother.createDefault();

	public withId(id: UniqueId): CartDeviceMother {
		this.id = id;
		return this;
	}

	public withDevice(device: Device): CartDeviceMother {
		this.device = device;
		return this;
	}

	public build(): CartDevice {
		return new CartDevice(this.id, this.device);
	}

	public static createDefault() {
		return new CartDeviceMother().build();
	}
}
