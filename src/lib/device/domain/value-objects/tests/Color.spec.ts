import { expect, test } from 'vitest';
import { Color } from '../Color';

test('constructor', () => {
	const color = new Color('pink');
	expect(color).toMatchObject({ value: 'pink' });
});

test('valueOf', () => {
	const color = new Color('pink');
	expect(color.valueOf()).toMatch('pink');
});
