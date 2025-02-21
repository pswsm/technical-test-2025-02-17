import { describe, expect, it } from 'vitest';
import { Grade } from '../Grade';

describe('Grade', () => {
	describe('static excellent', () => {
		it('should match with excellent', () => {
			const gradeExcellent = Grade.EXCELLENT;
			expect(gradeExcellent).toMatchObject({
				value: 'excellent'
			});
		});
	});

	describe('static very_good', () => {
		it('should match with very_good', () => {
			const gradeExcellent = Grade.VERY_GOOD;
			expect(gradeExcellent).toMatchObject({
				value: 'very_good'
			});
		});
	});

	describe('static good', () => {
		it('should match with good', () => {
			const gradeExcellent = Grade.GOOD;
			expect(gradeExcellent).toMatchObject({
				value: 'good'
			});
		});
	});
});
