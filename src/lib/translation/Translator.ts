import type { StringValueObject } from '$lib/shared/StringValueObject';
import { Translations } from './Translations';

export class Translator {
	private readonly dictionary = Translations;

	public translate(key: StringValueObject): string {
		return this.dictionary[key.valueOf()] || key.valueOf();
	}
}

export const DefaultTranslator = new Translator();
