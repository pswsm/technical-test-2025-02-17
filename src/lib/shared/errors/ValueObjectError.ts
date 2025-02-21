export class ValueObjectError extends Error {
	constructor(
		private readonly code: string,
		message: string
	) {
		super(message);
	}

	public getCode(): string {
		return this.code;
	}

	public getMessage(): string {
		return this.message;
	}
}
