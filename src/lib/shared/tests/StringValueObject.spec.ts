import { describe, expect, it } from 'vitest';
import { InvalidValue } from '../errors/InvalidValue';
import { StringValueObject } from '../StringValueObject';

describe('StringValueObject', () => {
	describe('constructor', () => {
		it('should create a new instance', () => {
			expect(new StringValueObject('test')).toMatchObject({ value: 'test' });
		});

		it('should throw an error with null as value', () => {
			expect(() => new StringValueObject('')).toThrowError(InvalidValue);
		});
	});

	describe('valueOf', () => {
		it('should return the primitive value', () => {
			const vo = new StringValueObject('test');
			expect(vo.valueOf()).toEqual('test');
		});
	});

	describe('equals', () => {
		it('should return true on equal', () => {
			const vo2 = new StringValueObject('lorem ipsum dolem');
			const vo1 = new StringValueObject('lorem ipsum dolem');

			expect(vo1.equals(vo2)).toBeTruthy();
		});
		it('should return false on different', () => {
			const vo2 = new StringValueObject('lorem');
			const vo1 = new StringValueObject('ipsum');

			expect(vo1.equals(vo2)).toBeFalsy();
		});
	});
});
