import { describe, expect, it } from 'vitest';
import { NumberValueObject } from '../NumberValuObject';

describe('NumberValueObject', () => {
	describe('constructor', () => {
		it('should create a new instance', () => {
			expect(new NumberValueObject(10)).toMatchObject({ value: 10 });
		});
	});

	describe('valueOf', () => {
		it('should return the primitive value', () => {
			const vo = new NumberValueObject(-20);
			expect(vo.valueOf()).toEqual(-20);
		});
	});

	describe('equals', () => {
		it('should return true on equal', () => {
			const vo2 = new NumberValueObject(1);
			const vo1 = new NumberValueObject(1);

			expect(vo1.equals(vo2)).toBeTruthy();
		});
		it('should return false on different', () => {
			const vo2 = new NumberValueObject(2);
			const vo1 = new NumberValueObject(1);

			expect(vo1.equals(vo2)).toBeFalsy();
		});
	});
});
