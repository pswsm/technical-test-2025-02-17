import { describe, it, expect } from 'vitest';
import { MarketplaceInformation } from '../domain/MarketplaceInformation';
import { ImageLink } from '../domain/value-objects/ImageLink';
import { Price } from '../domain/value-objects/Price';
import { MarketplaceInformationMother } from '../mothers/MarketplaceMother';

describe('MarketplaceInformation', () => {
	const mother = new MarketplaceInformationMother();
	describe('constructor', () => {
		it('should create a new MarketplaceInformation instance', () => {
			expect(new MarketplaceInformation(mother.price, mother.image)).toMatchObject({
				price: mother.price,
				image: mother.image
			});
		});
	});

	describe('toPrimitives', () => {
		it('should return the class primitives', () => {
			const price = new Price(200);
			const image = new ImageLink('https://example.com/another-image.jpg');

			const marketplaceInfo = new MarketplaceInformation(price, image);

			const primitives = marketplaceInfo.toPrimitives();

			expect(primitives.price).toBe(price.valueOf());
			expect(primitives.image).toBe(image.valueOf());
		});
	});

	describe('fromPrimitives', () => {
		it('should recover a MarketplaceInformation instance from primitives', () => {
			const primitives = {
				price: 100,
				image: 'https://example.com/image.jpg'
			};

			const marketplaceInfo = MarketplaceInformation.fromPrimitives(primitives);

			expect(marketplaceInfo.getPrice().valueOf()).toBe(primitives.price);
			expect(marketplaceInfo.getImage().valueOf()).toBe(primitives.image);
		});
	});

	describe('getImage', () => {
		it('should return the image value object', () => {
			const imageValue = 'https://image.link/a.png';
			const image = new ImageLink(imageValue);
			const marketplaceInfo = mother.withImage(image).build();
			expect(marketplaceInfo).toMatchObject({
				price: mother.price,
				image
			});
		});
	});

	describe('getPrice', () => {
		it('should return the price value object', () => {
			const priceValue = 1000;
			const price = new Price(priceValue);
			const marketplaceInfo = mother.withPrice(price).build();
			expect(marketplaceInfo).toMatchObject({
				image: mother.image,
				price
			});
		});
	});
});
