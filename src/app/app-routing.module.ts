import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'main',
		redirectTo: 'main',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
	},
	{
		path: 'manager',
		loadChildren: () => import('./manager/manager.module').then(m => m.ManagerPageModule)
	},
	{
		path: 'purchaseHistory',
		loadChildren: () => import('./purchaseHistory/purchaseHistory.module').then(m => m.purchaseHistoryPageModule)
	},
	{
		path: 'restock',
		loadChildren: () => import('./restock/restock.module').then(m => m.RestockPageModule)
	},
	{
		path: ':name',
		loadChildren: () =>
			import('./purchaseDetails/purchaseDetails.module').then(
				m => m.purchaseDetailsPageModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
