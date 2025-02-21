import { StringValueObject } from '$lib/shared/StringValueObject';
import { Device } from '../domain/Device';
import { MarketplaceInformation } from '../domain/MarketplaceInformation';
import { Specs } from '../domain/Specs';
import { Description } from '../domain/value-objects/Description';
import { DeviceName } from '../domain/value-objects/DeviceName';
import { SkuId } from '../domain/value-objects/SkuId';
import { MarketplaceInformationMother } from './MarketplaceMother';
import { SpecsMother } from './SpecsMother';

export class DeviceMother {
	public id: StringValueObject = new StringValueObject('default-id');
	public skuId: SkuId = new SkuId('default-sku-id');
	public name: DeviceName = new DeviceName('default-name');
	public description: Description = new Description('default-description');
	public specs: Specs = SpecsMother.createDefault();
	public marketplaceInformation: MarketplaceInformation =
		MarketplaceInformationMother.createDefault();

	withId(id: StringValueObject): DeviceMother {
		this.id = id;
		return this;
	}

	withSkuId(skuId: SkuId): DeviceMother {
		this.skuId = skuId;
		return this;
	}

	withName(name: DeviceName): DeviceMother {
		this.name = name;
		return this;
	}

	withDescription(description: Description): DeviceMother {
		this.description = description;
		return this;
	}

	withSpecs(specs: Specs): DeviceMother {
		this.specs = specs;
		return this;
	}

	withMarketplaceInformation(marketplaceInformation: MarketplaceInformation): DeviceMother {
		this.marketplaceInformation = marketplaceInformation;
		return this;
	}

	build(): Device {
		return new Device(
			this.id,
			this.skuId,
			this.name,
			this.description,
			this.specs,
			this.marketplaceInformation
		);
	}

	static createDefault(): Device {
		return new DeviceMother().build();
	}
}
