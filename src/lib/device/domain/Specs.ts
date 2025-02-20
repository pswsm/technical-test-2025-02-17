import type { PrimitiveOf } from '$lib/shared/PrimitiveOf';
import { Color } from './value-objects/Color';
import { Grade } from './value-objects/Grade';
import { Storage } from './value-objects/Storage';

export class Specs {
	public static fromPrimitives(primitives: PrimitiveOf<Specs>): Specs {
		return new Specs(
			new Grade(primitives.grade),
			new Color(primitives.color),
			new Storage(primitives.storage)
		);
	}
	constructor(
		public readonly grade: Grade,
		public readonly color: Color,
		public readonly storage: Storage
	) {}

	public toPrimitives() {
		return {
			grade: this.grade.valueOf(),
			color: this.color.valueOf(),
			storage: this.storage.valueOf()
		};
	}
}
