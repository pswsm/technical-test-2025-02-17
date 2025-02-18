import type { Color } from './value-objects/Color';
import type { Grade } from './value-objects/Grade';
import type { Storage } from './value-objects/Storage';

export class Specs {
	constructor(
		public readonly grade: Grade,
		public readonly color: Color,
		public readonly storage: Storage
	) {}
}
