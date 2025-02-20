import { Device } from '$lib/device/domain/Device';
import type { Description } from '$lib/device/domain/value-objects/Description';
import type { DeviceName } from '$lib/device/domain/value-objects/DeviceName';
import type { Price } from '$lib/device/domain/value-objects/Price';
import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';
import { UniqueId } from '$lib/shared/UniqueId';

export class CartDevice {
	public static fromPrimitives(primitives: PrimitiveOf<CartDevice>) {
		return new CartDevice(new UniqueId(primitives.id), Device.fromPrimitives(primitives.device));
	}

	constructor(
		private readonly id: UniqueId,
		private readonly device: Device
	) {}

	public getId(): UniqueId {
		return this.id;
	}

	public getDeviceName(): DeviceName {
		return this.device.getName();
	}

	public getDevicePrice(): Price {
		return this.device.getPrice();
	}

	public getDeviceDescription(): Description {
		return this.device.getDescription();
	}

	public getDevice(): Device {
		return this.device;
	}

	public toPrimitives() {
		return {
			id: this.id.valueOf(),
			device: this.device.toPrimitives()
		};
	}
}
