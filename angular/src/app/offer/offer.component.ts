import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../core/models/offer.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {OfferService} from '../core/services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent implements OnInit {
  @Input() offer: Offer;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    if (this.offer === undefined) {
      this.getOffer();
    }
  }

  getOffer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.offerService.getOffer(id)
      .subscribe(offer => this.offer = offer);
  }
}
