import type { ApiSku } from '$lib/types/ApiSku';
import { Device } from '../domain/Device';
import { MarketplaceInformation } from '../domain/MarketplaceInformation';
import { Specs } from '../domain/Specs';
import { Color } from '../domain/value-objects/Color';
import { Description } from '../domain/value-objects/Description';
import { DeviceName } from '../domain/value-objects/DeviceName';
import { Grade } from '../domain/value-objects/Grade';
import { ImageLink } from '../domain/value-objects/ImageLink';
import { Price } from '../domain/value-objects/Price';
import { SkuId } from '../domain/value-objects/SkuId';
import { Storage } from '../domain/value-objects/Storage';

export class DomainMapper {
	public static toDomain(apiData: ApiSku) {
		const marketplaceInformation: MarketplaceInformation = new MarketplaceInformation(
			new Price(apiData.price),
			new ImageLink(apiData.image)
		);
		const specs: Specs = new Specs(
			new Grade(apiData.grade),
			new Color(apiData.color),
			new Storage(apiData.storage)
		);
		return new Device(
			new SkuId(apiData.sku),
			new DeviceName(apiData.name),
			new Description(apiData.description),
			specs,
			marketplaceInformation
		);
	}
}
