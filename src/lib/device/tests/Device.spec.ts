import { describe, expect, it } from 'vitest';
import { DeviceMother } from '../mothers/DeviceMother';
import { Device } from '../domain/Device';
import { DeviceName } from '../domain/value-objects/DeviceName';
import { ImageLink } from '../domain/value-objects/ImageLink';
import { MarketplaceInformationMother } from '../mothers/MarketplaceMother';
import { Description } from '../domain/value-objects/Description';
import { Price } from '../domain/value-objects/Price';
import { Grade } from '../domain/value-objects/Grade';
import { SpecsMother } from '../mothers/SpecsMother';
import { Color } from '../domain/value-objects/Color';
import { Storage } from '../domain/value-objects/Storage';
import { SkuId } from '../domain/value-objects/SkuId';
import { StringValueObject } from '$lib/shared/StringValueObject';

describe('Device', () => {
	const deviceMother = new DeviceMother();
	it('cosntructor', () => {
		expect(
			new Device(
				deviceMother.id,
				deviceMother.skuId,
				deviceMother.name,
				deviceMother.description,
				deviceMother.specs,
				deviceMother.marketplaceInformation
			)
		).toMatchObject({
			id: deviceMother.id,
			skuId: deviceMother.skuId,
			name: deviceMother.name,
			description: deviceMother.description,
			specs: deviceMother.specs,
			marketplaceInformation: deviceMother.marketplaceInformation
		});
	});

	it('toPrimitives', () => {
		const device = deviceMother.build();
		expect(device.toPrimitives()).toMatchObject({
			id: deviceMother.id.valueOf(),
			skuId: deviceMother.skuId.valueOf(),
			name: deviceMother.name.valueOf(),
			description: deviceMother.description.valueOf(),
			specs: deviceMother.specs.toPrimitives(),
			marketplaceInformation: deviceMother.marketplaceInformation.toPrimitives()
		});
	});

	it('fromPrimitives', () => {
		const primitives = deviceMother.build().toPrimitives();
		expect(Device.fromPrimitives(primitives)).toMatchObject({
			id: deviceMother.id,
			skuId: deviceMother.skuId,
			name: deviceMother.name,
			description: deviceMother.description,
			specs: deviceMother.specs,
			marketplaceInformation: deviceMother.marketplaceInformation
		});
	});

	it('getName', () => {
		const name = new DeviceName('test');
		const device = deviceMother.withName(name).build();
		expect(device.getName()).toMatchObject(name);
	});

	it('getImage', () => {
		const image = new ImageLink('imglinkTest.png');
		const marketplaceInformation = new MarketplaceInformationMother().withImage(image).build();
		const device = deviceMother.withMarketplaceInformation(marketplaceInformation).build();
		expect(device.getImage()).toMatchObject(image);
	});

	it('getDescription', () => {
		const description = new Description('test');
		const device = deviceMother.withDescription(description).build();
		expect(device.getDescription()).toMatchObject(description);
	});

	it('getPrice', () => {
		const price = new Price(275);
		const marketplaceInformation = new MarketplaceInformationMother().withPrice(price).build();
		const device = deviceMother.withMarketplaceInformation(marketplaceInformation).build();
		expect(device.getPrice()).toMatchObject(price);
	});

	it('getGrade', () => {
		const grade = Grade.EXCELLENT;
		const specs = new SpecsMother().withGrade(grade).build();
		const device = deviceMother.withSpecs(specs).build();
		expect(device.getGrade()).toMatchObject(grade);
	});

	it('getSpecs', () => {
		const specs = new SpecsMother()
			.withColor(new Color('blue'))
			.withGrade(Grade.EXCELLENT)
			.withStorage(new Storage(1024))
			.build();
		const device = deviceMother.withSpecs(specs).build();
		expect(device.getSpecs()).toMatchObject(specs);
	});

	it('getSkuId', () => {
		const skuId = new SkuId('test-skuid');
		const device = deviceMother.withSkuId(skuId).build();
		expect(device.getSkuId()).toMatchObject(skuId);
	});

	it('getId', () => {
		const id = new StringValueObject('some-id');
		const device = deviceMother.withId(id).build();
		expect(device.getId()).toMatchObject(id);
	});
});
