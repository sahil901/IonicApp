import { Component, OnInit } from '@angular/core';
import { ProdDetails } from 'src/app/general/interface';
import { ProductService } from '../product.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-restock',
	templateUrl: './restock.page.html',
	styleUrls: ['./restock.page.scss']
})
export class RestockPage implements OnInit {
	restockChosenProd: ProdDetails;
	prodList: ProdDetails[];

	inputValue: string;

	constructor(
		private prodServ: ProductService,
		private alertController: AlertController,
		private router: Router
	) { }

	ngOnInit() {
		this.prodList = this.prodServ.getProd();
	}

	selectRestockProd(product: ProdDetails) {
		this.restockChosenProd = product;
	}

	async prodRestock() {
		if (this.restockChosenProd === undefined) {
			const alert = await this.alertController.create({
				header: 'No Item Selected!',
				message: 'Please select an item that you would like to restock!',
				buttons: ['Ok']
			});
			await alert.present();
		} else if (
			this.inputValue === null ||
			this.inputValue === '' ||
			parseInt(this.inputValue) < 0 ||
			isNaN(parseInt(this.inputValue))
		) {
			const alert = await this.alertController.create({
				header: 'No Value Provided!',
				message: 'Please enter a value to restock selected product',
				buttons: ['Ok']
			});
			await alert.present();
		} else {
			this.restockChosenProd.pQuantity += parseInt(this.inputValue);
			this.router.navigate(['']);
		}
	}
}
