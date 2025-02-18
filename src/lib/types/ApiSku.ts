import type { SkuColor } from './SkuColor';
import type { SkuGrade } from './SkuGrade';
import type { SkuStorage } from './SkuStorage';

export interface ApiSku {
	id: string;
	sku: string;
	name: string;
	description: string;
	price: number;
	grade: SkuGrade;
	color: SkuColor;
	storage: SkuStorage;
	image: string;
}
