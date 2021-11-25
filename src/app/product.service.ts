import { Injectable } from '@angular/core';
import { ProdDetails, ProductHistory } from './general/interface';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	public products: ProdDetails[] = [
		{
			name: 'Pants',
			pQuantity: 20,
			pPrice: 50.70
		},
		{
			name: 'Shoes',
			pQuantity: 50,
			pPrice: 90.00
		},
		{
			name: 'Hats',
			pQuantity: 100,
			pPrice: 20.50
		},
		{
			name: 'T-Shirts',
			pQuantity: 100,
			pPrice: 19.99
		},
		{
			name: 'Dresses',
			pQuantity: 24,
			pPrice: 99.99
		},
		{
			name: 'Socks',
			pQuantity: 50,
			pPrice: 7.99
		}
	];
	public ProdHisServ: ProductHistory[] = [];

	constructor() { }

	getProd(): ProdDetails[] {
		return [...this.products];
	}

	getHisProd(): ProductHistory[] {
		return [...this.ProdHisServ];
	}

	getHisProdtwo(name: string): ProductHistory {
		return this.ProdHisServ.find(i => i.name === name);
	}

	AStock(pd: ProdDetails): void {
		this.products.push(pd);
	}

	UStock(pd: ProdDetails, prodStock: number): void {
		pd.pQuantity = prodStock;
	}

	purchaseProduct(item: ProdDetails): ProdDetails[] {
		const product = {
			...this.products.find(i => {
				return i.name === item.name;
			})
		};

		let i = this.products.findIndex(i => i.name === item.name);

		this.products.splice(i, 1);

		this.products.push({
			name: product.name,
			pQuantity: product.pQuantity - item.pQuantity,
			pPrice: product.pPrice
		});
		return [...this.products];
	}

	newHisProd(product: ProductHistory): ProductHistory[] {
		this.ProdHisServ.push(product);
		return [...this.ProdHisServ];
	}
}
