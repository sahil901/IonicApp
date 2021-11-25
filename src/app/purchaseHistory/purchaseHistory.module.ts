import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { purchaseHistoryPageRoutingModule } from './purchaseHistory-routing.module';

import { purchaseHistoryPage } from './purchaseHistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    purchaseHistoryPageRoutingModule
  ],
  declarations: [purchaseHistoryPage]
})
export class purchaseHistoryPageModule { }
