export const SkuColor = {
	white: 'white',
	black: 'black',
	red: 'red',
	pink: 'pink'
} as const;

export type SkuColor = keyof typeof SkuColor;
