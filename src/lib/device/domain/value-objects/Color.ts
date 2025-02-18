import { StringValueObject } from '$lib/shared/StringValueObject';
import type { SkuColor } from '$lib/types/SkuColor';

export class Color extends StringValueObject {
	constructor(value: SkuColor) {
		super(value);
	}
}
