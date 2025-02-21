import { ValueObject } from './ValueObject';
import { InvalidValue } from './errors/InvalidValue';

export class StringValueObject extends ValueObject<string> {
	constructor(value: string) {
		if (value === '') {
			throw new InvalidValue();
		}
		super(value);
	}

	public equals(other: ValueObject<string>): boolean {
		return this.value === other.valueOf();
	}
}
