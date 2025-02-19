export const SkuGrade = {
	excellent: 'excellent',
	very_good: 'very_good',
	good: 'good'
} as const;

export type SkuGrade = keyof typeof SkuGrade;
