export class ValueObjectError {
	constructor(
		private readonly code: string,
		private readonly message: string
	) {}

	public getCode(): string {
		return this.code;
	}

	public getMessage(): string {
		return this.message;
	}
}
