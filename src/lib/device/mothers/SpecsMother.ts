import { Specs } from '../domain/Specs';
import { Color } from '../domain/value-objects/Color';
import { Grade } from '../domain/value-objects/Grade';
import { Storage } from '../domain/value-objects/Storage';

export class SpecsMother {
	public grade: Grade = Grade.EXCELLENT;
	public color: Color = new Color('pink');
	public storage: Storage = new Storage(256);

	withGrade(grade: Grade): SpecsMother {
		this.grade = grade;
		return this;
	}

	withColor(color: Color): SpecsMother {
		this.color = color;
		return this;
	}

	withStorage(storage: Storage): SpecsMother {
		this.storage = storage;
		return this;
	}

	build(): Specs {
		return new Specs(this.grade, this.color, this.storage);
	}

	static createDefault(): Specs {
		return new SpecsMother().build();
	}
}
