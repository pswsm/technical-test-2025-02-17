import { Description } from './value-objects/Description';
import { DeviceName } from './value-objects/DeviceName';
import { SkuId } from './value-objects/SkuId';
import { Specs } from './Specs';
import { MarketplaceInformation } from './MarketplaceInformation';
import type { ImageLink } from './value-objects/ImageLink';
import type { Price } from './value-objects/Price';
import type { Grade } from './value-objects/Grade';
import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';
import { StringValueObject } from '$lib/shared/StringValueObject';

export class Device {
	public static fromPrimitives(primitives: PrimitiveOf<Device>): Device {
		return new Device(
			new StringValueObject(primitives.id),
			new SkuId(primitives.skuId),
			new DeviceName(primitives.name),
			new Description(primitives.description),
			Specs.fromPrimitives(primitives.specs),
			MarketplaceInformation.fromPrimitives(primitives.marketplaceInformation)
		);
	}
	constructor(
		private readonly id: StringValueObject,
		private readonly skuId: SkuId,
		private readonly name: DeviceName,
		private readonly description: Description,
		private readonly specs: Specs,
		private readonly marketplaceInformation: MarketplaceInformation
	) {}

	public getName(): DeviceName {
		return this.name;
	}

	public getImage(): ImageLink {
		return this.marketplaceInformation.getImage();
	}

	public getDescription(): Description {
		return this.description;
	}

	public getPrice(): Price {
		return this.marketplaceInformation.getPrice();
	}

	public getGrade(): Grade {
		return this.specs.grade;
	}

	public getSpecs(): Specs {
		return this.specs;
	}

	public getSkuId(): SkuId {
		return this.skuId;
	}

	public getId(): StringValueObject {
		return this.id;
	}

	public toPrimitives() {
		return {
			id: this.id.valueOf(),
			skuId: this.skuId.valueOf(),
			name: this.name.valueOf(),
			description: this.description.valueOf(),
			specs: this.specs.toPrimitives(),
			marketplaceInformation: this.marketplaceInformation.toPrimitives()
		};
	}
}
