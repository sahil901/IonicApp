export class ProdDetails {
	name: string;
	pQuantity: number;
	pPrice: number;

	constructor(name: string, pQuantity: number, pPrice: number) {
		this.name = name;
		this.pQuantity = pQuantity;
		this.pPrice = pPrice;
	}

	toString(): string {
		return this.name;
	}
}

export class ProductHistory extends ProdDetails {
	DTOfPurchase: string;

	constructor(name: string, pQuantity: number, pPrice: number) {
		super(name, pQuantity, pPrice);

		this.DTOfPurchase = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
	}

	toString(): string {
		return (
			'Item = =  = = = ' + this.name + ' ' + this.pQuantity + ' ' + this.DTOfPurchase + ' ' + this.pPrice
		);
	}
}
