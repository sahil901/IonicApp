import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductHistory } from '../general/interface';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-purchaseDetails',
	templateUrl: './purchaseDetails.page.html',
	styleUrls: ['./purchaseDetails.page.scss']
})
export class purchaseDetailsPage implements OnInit {
	ProdPurchName: string = '';
	ProdHisDet: ProductHistory;

	constructor(private activatedRoute: ActivatedRoute, private prodServ: ProductService) { }

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe(paramMap => {
			if (!paramMap.has('name')) return;
			const historyName = paramMap.get('name');
			this.ProdHisDet = this.prodServ.getHisProdtwo(historyName);

			this.ProdPurchName = this.ProdHisDet.name;
		});
	}
}
