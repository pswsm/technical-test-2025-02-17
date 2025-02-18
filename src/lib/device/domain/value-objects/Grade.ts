import { StringValueObject } from '$lib/shared/StringValueObject';
import type { SkuGrade } from '$lib/types/SkuGrade';

export class Grade extends StringValueObject {
	constructor(value: SkuGrade) {
		super(value);
	}
}
