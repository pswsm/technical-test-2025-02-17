import { MarketplaceInformation } from '../domain/MarketplaceInformation';
import { ImageLink } from '../domain/value-objects/ImageLink';
import { Price } from '../domain/value-objects/Price';

export class MarketplaceInformationMother {
	public price: Price = new Price(0);
	public image: ImageLink = new ImageLink('default-image-link');

	withPrice(price: Price): MarketplaceInformationMother {
		this.price = price;
		return this;
	}

	withImage(image: ImageLink): MarketplaceInformationMother {
		this.image = image;
		return this;
	}

	build(): MarketplaceInformation {
		return new MarketplaceInformation(this.price, this.image);
	}

	static createDefault(): MarketplaceInformation {
		return new MarketplaceInformationMother().build();
	}
}
