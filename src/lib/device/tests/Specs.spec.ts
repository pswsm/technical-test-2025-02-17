import { describe, it, expect } from 'vitest';
import { SpecsMother } from '../mothers/SpecsMother';
import { Specs } from '../domain/Specs';

describe('Specs', () => {
	const mother = new SpecsMother();
	describe('constructor', () => {
		it('should create a new Specs instance', () => {
			expect(new Specs(mother.grade, mother.color, mother.storage)).toMatchObject({
				grade: mother.grade,
				color: mother.color,
				storage: mother.storage
			});
		});
	});

	describe('toPrimitives', () => {
		it('should return the class primitives', () => {
			const specs = mother.build();

			const primitives = specs.toPrimitives();

			expect(primitives.color).toBe(mother.color.valueOf());
			expect(primitives.grade).toBe(mother.grade.valueOf());
			expect(primitives.storage).toBe(mother.storage.valueOf());
		});
	});

	describe('fromPrimitives', () => {
		it('should recover a MarketplaceInformation instance from primitives', () => {
			const primitives = {
				color: 'magenta',
				grade: 'very_good',
				storage: 1024
			};

			const specs = Specs.fromPrimitives(primitives);

			expect(specs).toMatchObject({
				color: { value: 'magenta' },
				grade: { value: 'very_good' },
				storage: { value: 1024 }
			});
		});
	});
});
