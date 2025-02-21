import { ValueObject } from './ValueObject';

export class NumberValueObject extends ValueObject<number> {
	public equals(other: ValueObject<number>): boolean {
		return this.value == other.valueOf();
	}
}
