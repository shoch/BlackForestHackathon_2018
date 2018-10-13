import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfferService} from '../core/services/offer.service';
import {Location} from '@angular/common';
import {Offer} from '../core/models/offer.model';
import {OFFERS} from '../core/mock/offers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  @Input() offers: Offer[];

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private location: Location
  ) {
  }

  ngOnInit() {
    if (this.offers === undefined) {
      this.getOffers();
    }
  }

  getOffers(): void {
    this.offerService.getOffers().subscribe(offer => this.offers = offer);
  }

}
