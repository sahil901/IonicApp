import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { purchaseHistoryPage } from './purchaseHistory.page';
import { purchaseDetailsPage } from '../purchaseDetails/purchaseDetails.page';

const routes: Routes = [
	{
		path: '',
		component: purchaseHistoryPage
	},
	{
		path: ':name',
		component: purchaseDetailsPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class purchaseHistoryPageRoutingModule { }
