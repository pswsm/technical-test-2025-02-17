import { InvalidValue } from './errors/InvalidValue';

export abstract class ValueObject<T> {
	protected readonly value: T;
	constructor(value: T) {
		if (value == null || value == undefined) {
			throw new InvalidValue();
		}
		this.value = Object.freeze(value);
	}

	public valueOf(): T {
		return this.value;
	}

	public abstract equals(other: ValueObject<T>): boolean;
}
