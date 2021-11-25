import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { purchaseDetailsPage } from './purchaseDetails.page';

const routes: Routes = [
  {
    path: '',
    component: purchaseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class purchaseDetailsPageRoutingModule { }
