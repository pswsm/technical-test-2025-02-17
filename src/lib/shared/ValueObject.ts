import { ValueObjectError } from './ValueObjectError';

export class ValueObject<T> {
	protected readonly value: T;
	constructor(value: T) {
		if (value == null || value == undefined) {
			throw new ValueObjectError('InvalidValue', 'Value cannot be null');
		}
		this.value = Object.freeze(value);
	}

	public valueOf(): T {
		return this.value;
	}

	public equals(other: ValueObject<T>): boolean {
		if (other === null || other === undefined) {
			return false;
		}
		return this.value === other.valueOf();
	}
}
