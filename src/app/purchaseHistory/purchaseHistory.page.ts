import { Component, OnInit } from '@angular/core';
import { ProductHistory } from '../general/interface';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-purchaseHistory',
	templateUrl: './purchaseHistory.page.html',
	styleUrls: ['./purchaseHistory.page.scss']
})
export class purchaseHistoryPage implements OnInit {
	hProd: ProductHistory[];
	ProdHisDet: ProductHistory;

	constructor(private prodServ: ProductService, private routes: Router) { }

	ngOnInit() {
		this.hProd = this.prodServ.getHisProd();
	}

	viewDetails(name) {
		this.routes.navigate([`${name}`]);
	}
}
