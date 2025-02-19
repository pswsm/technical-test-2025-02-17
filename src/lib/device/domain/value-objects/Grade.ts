import { StringValueObject } from '$lib/shared/StringValueObject';
import { SkuGrade } from '$lib/types/SkuGrade';

export class Grade extends StringValueObject {
	public static EXCELLENT = new Grade(SkuGrade.excellent);
	public static VERY_GOOD = new Grade(SkuGrade.very_good);
	public static GOOD = new Grade(SkuGrade.good);
}
