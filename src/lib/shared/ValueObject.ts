import { ValueObjectError } from './ValueObjectError';

export class ValueObject<T> {
	constructor(private readonly value: T) {
		if (value == null || value == undefined) {
			throw new ValueObjectError('InvalidValue', 'Value cannot be null');
		}
	}

	public getValue(): T {
		return this.value;
	}
}
