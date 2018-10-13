import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';
import { LoansComponent } from './loans/loans.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoanComponent } from './loan/loan.component';
import { OfferComponent } from './offer/offer.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    OffersComponent,
    ProductsComponent,
    LoansComponent,
    LoanComponent,
    OfferComponent,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
