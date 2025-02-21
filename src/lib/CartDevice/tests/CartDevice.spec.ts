import { describe, expect, it } from 'vitest';
import { CartDevice } from '../domain/CartDevice';
import { UniqueId } from '$lib/shared/UniqueId';
import { DeviceMother } from '$lib/device/mothers/DeviceMother';
import { CartDeviceMother } from '../mothers/CartDeviceMother';
import { DeviceName } from '$lib/device/domain/value-objects/DeviceName';
import { Price } from '$lib/device/domain/value-objects/Price';
import { Description } from '$lib/device/domain/value-objects/Description';
import { MarketplaceInformationMother } from '$lib/device/mothers/MarketplaceMother';

describe('CartDevice', () => {
	const cartDeviceMother = new CartDeviceMother();
	const deviceMother = new DeviceMother();
	describe('constructor', () => {
		it('should create a new CartDevice instance', () => {
			const id = new UniqueId('nonrandomId');
			expect(new CartDevice(id, deviceMother.build())).toMatchObject({
				id,
				device: deviceMother.build()
			});
		});
	});

	describe('toPrimitives', () => {
		it("should return CartDevice's primitves", () => {
			const cartDevice = cartDeviceMother.withId(new UniqueId('banana')).build();
			expect(cartDevice.toPrimitives()).toMatchObject({
				id: 'banana',
				device: cartDeviceMother.device.toPrimitives()
			});
		});
	});

	describe('fromPrimitives', () => {
		it('should recover the instance from its primitives', () => {
			const id = new UniqueId('randomId');
			const device = deviceMother.build();
			const primitives = { id: id.valueOf(), device: device.toPrimitives() };
			expect(CartDevice.fromPrimitives(primitives)).toMatchObject(
				cartDeviceMother.withId(id).withDevice(device).build()
			);
		});
	});

	describe('getId', () => {
		it('should return the correct id', () => {
			const id = new UniqueId('getId');
			const cartDevice = cartDeviceMother.withId(id).build();
			expect(cartDevice.getId()).toMatchObject(id);
		});
	});

	describe('getDeviceName', () => {
		it('should return the correct device name', () => {
			const name = new DeviceName('iphone-13');
			const device = deviceMother.withName(name).build();
			const cartDevice = cartDeviceMother.withDevice(device).build();
			expect(cartDevice.getDeviceName()).toMatchObject(name);
		});
	});

	describe('getDevicePrice', () => {
		it('should return the correct device price', () => {
			const price = new Price(1000);
			const marketplaceInfo = new MarketplaceInformationMother().withPrice(price).build();
			const device = deviceMother.withMarketplaceInformation(marketplaceInfo).build();
			const cartDevice = cartDeviceMother.withDevice(device).build();
			expect(cartDevice.getDevicePrice()).toMatchObject(price);
		});
	});

	describe('getDeviceDescription', () => {
		it('should return the correct device description', () => {
			const description = new Description('lorem ipsum dolem sit amet');
			const device = deviceMother.withDescription(description).build();
			const cartDevice = cartDeviceMother.withDevice(device).build();
			expect(cartDevice.getDeviceDescription()).toMatchObject(description);
		});
	});

	describe('getDevice', () => {
		it('should return the device instance', () => {
			const device = deviceMother.build();
			const cartDevice = cartDeviceMother.withDevice(device).build();
			expect(cartDevice.getDevice()).toBe(device);
		});
	});
});
