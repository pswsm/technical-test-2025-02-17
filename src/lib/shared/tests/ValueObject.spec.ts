import { expect, test } from 'vitest';
import { ValueObject } from '../ValueObject';

test('constructor', () => {
	const vo = new ValueObject<number>(1);

	expect(vo).toMatchObject({ value: 1 });
});

test('constructor on 0', () => {
	const vo = new ValueObject<number>(0);
	expect(vo).toMatchObject({ value: 0 });
});
