import { ValueObjectError } from './ValueObjectError';

export class InvalidValue extends ValueObjectError {
	constructor() {
		super('InvalidValue', 'Tried to instance a ValueObject with an invalid value');
	}
}
