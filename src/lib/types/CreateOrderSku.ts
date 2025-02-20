import type { SkuColor } from './SkuColor';
import type { SkuGrade } from './SkuGrade';
import type { SkuStorage } from './SkuStorage';

export interface CreateOrderSku {
	id: string;
	sku: string;
	grade: SkuGrade;
	color: SkuColor;
	storage: SkuStorage;
}
