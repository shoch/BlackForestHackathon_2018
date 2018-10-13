import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from '../products/products.component';
import { OffersComponent} from '../offers/offers.component';
import {OfferComponent} from '../offer/offer.component';

const routes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'offer/:id', component: OfferComponent },
  { path: 'loans', component: ProductsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
