import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { purchaseDetailsPageRoutingModule } from './purchaseDetails-routing.module';

import { purchaseDetailsPage } from './purchaseDetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    purchaseDetailsPageRoutingModule
  ],
  declarations: [purchaseDetailsPage]
})
export class purchaseDetailsPageModule { }
