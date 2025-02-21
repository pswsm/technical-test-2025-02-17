import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';
import { ImageLink } from './value-objects/ImageLink';
import { Price } from './value-objects/Price';

export class MarketplaceInformation {
	public static fromPrimitives(
		primitives: PrimitiveOf<MarketplaceInformation>
	): MarketplaceInformation {
		return new MarketplaceInformation(new Price(primitives.price), new ImageLink(primitives.image));
	}
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

	public toPrimitives() {
		return {
			price: this.price.valueOf(),
			image: this.image.valueOf()
		};
	}
}
