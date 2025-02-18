import { ValueObject } from './ValueObject';
import { ValueObjectError } from './ValueObjectError';

export class StringValueObject extends ValueObject<string> {
	constructor(value: string) {
		if (value === '') {
			throw new ValueObjectError('InvalidString', 'Invalid String provided');
		}
		super(value);
	}
}
