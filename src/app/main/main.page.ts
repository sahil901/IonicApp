import { Component } from '@angular/core';
import { ProdDetails, ProductHistory } from '../general/interface';
import { ProductService } from '../product.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'main.page.html',
	styleUrls: [ 'main.page.scss' ]
})
export class MainPage {
	chosenProd: ProdDetails;
	subTotal: string;
	chosenQuantity: string;

	Products: ProdDetails[];
	hProd: ProductHistory[];

	constructor(
		private routes: Router,
		private prodServ: ProductService,
		public alertController: AlertController
	) {}

	ngOnInit() {
		this.chosenProd = { name: '', pQuantity: 0, pPrice: 0.0 };
		this.chosenQuantity = 'Quantity';
		this.subTotal = 'Total';
		this.Products = this.prodServ.getProd();
		this.hProd = [];
	}

	View() {
		this.Products = this.prodServ.getProd();
	}

	reset() {
		this.subTotal = 'Total';
		this.chosenQuantity = 'Quantity';
	}

	chooseItem(i) {
		this.chosenProd = i;
	}

	async snum(n) {
		if (!this.chosenProd.name) {
			const alert = await this.alertController.create({
				header: 'No Item Selected!',
				message: 'Please select an item that you would like to purchase!',
				buttons: [ 'Ok' ]
			});
			await alert.present();
			this.reset();
		} else {
			if (this.chosenQuantity == 'Quantity') {
				this.chosenQuantity = '';
			}
			var inspectNumber = parseInt(this.chosenQuantity + n.target.innerText);
			if (inspectNumber > this.chosenProd.pQuantity) {
				const alert = await this.alertController.create({
					header: 'Stock Issue!',
					message: 'We do not have enough stock of selected Item, please select another product!',
					buttons: [ 'Ok' ]
				});
				this.chosenQuantity = '';
				await alert.present();
				this.reset();
			} else {
				this.chosenQuantity += n.target.innerText;
				var num = parseInt(this.chosenQuantity) * this.chosenProd.pPrice;
				this.subTotal = '' + num;
			}
		}
	}

	navManager(e) {
		this.routes.navigate([ 'manager' ]);
	}

	async purchaseItem(n) {
		if (!this.chosenProd.name || this.chosenQuantity == 'Quantity' || this.chosenQuantity == '') {
			const alert = await this.alertController.create({
				header: 'No Quantity Provided!',
				message: 'Please provide an amount of the item that you would like to purchase!',
				buttons: [ 'Ok' ]
			});
			await alert.present();
		} else {
			const ItemUpdated = {
				name: this.chosenProd.name,
				pQuantity: parseInt(this.chosenQuantity),
				pPrice: this.chosenProd.pPrice
			};
			this.prodServ.purchaseProduct(ItemUpdated);

			let boughtProduct = new ProductHistory(
				this.chosenProd.name,
				parseInt(this.chosenQuantity),
				parseInt(this.chosenQuantity) * this.chosenProd.pPrice
			);
			this.hProd = this.prodServ.newHisProd(boughtProduct);
			this.prodServ.UStock(
				this.chosenProd,
				this.chosenProd.pQuantity - parseInt(this.chosenQuantity)
			);
			this.reset();
			this.chosenProd = <ProdDetails>{};
		}
	}
}
