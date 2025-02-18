export const SkuStorage = {
	64: 64,
	128: 128,
	256: 256,
	512: 512
} as const;

export type SkuStorage = keyof typeof SkuStorage;
