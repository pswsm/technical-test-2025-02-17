import type { Description } from './value-objects/Description';
import type { DeviceName } from './value-objects/DeviceName';
import type { SkuId } from './value-objects/SkuId';
import type { Specs } from './Specs';
import type { MarketplaceInformation } from './MarketplaceInformation';
import type { ImageLink } from './value-objects/ImageLink';

export class Device {
	constructor(
		private readonly id: SkuId,
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
}
