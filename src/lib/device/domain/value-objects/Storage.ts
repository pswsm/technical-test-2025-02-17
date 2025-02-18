import { NumberValueObject } from '$lib/shared/NumberValuObject';
import type { SkuStorage } from '$lib/types/SkuStorage';

export class Storage extends NumberValueObject {
	constructor(value: SkuStorage) {
		super(value);
	}
}
