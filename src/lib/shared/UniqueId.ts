import { StringValueObject } from './StringValueObject';

export class UniqueId extends StringValueObject {
	public static new(): UniqueId {
		const datePartId = Date.now().toString(16);
		const textPartId = (Math.random() * 100).toString(36);
		const id = `${datePartId}${textPartId}`;
		return new UniqueId(id);
	}

	constructor(value: string) {
		super(value);
	}
}
