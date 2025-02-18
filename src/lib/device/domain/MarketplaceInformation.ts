import type { ImageLink } from './value-objects/ImageLink';
import type { Price } from './value-objects/Price';

export class MarketplaceInformation {
	constructor(
		private readonly price: Price,
		private readonly image: ImageLink
	) {}

	public getImage(): ImageLink {
		return this.image;
	}

	public getPrice(): Price {
		return this.price;
	}
}
