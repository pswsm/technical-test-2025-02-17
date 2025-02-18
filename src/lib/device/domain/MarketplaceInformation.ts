import type { ImageLink } from './value-objects/ImageLink';
import type { Price } from './value-objects/Price';

export class MarketplaceInformation {
	constructor(
		public readonly price: Price,
		public readonly image: ImageLink
	) {}

	public getImage(): ImageLink {
		return this.image;
	}
}
