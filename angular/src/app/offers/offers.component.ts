import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfferService} from '../core/services/offer.service';
import {Location} from '@angular/common';
import {Offer} from '../core/models/offer.model';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers$: Observable<Offer[]>;
  searchTerms = new Subject<ProtoOffer>();

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
  ) {
  }

  search(productName: string, geolocation: string, start: string, end: string): void {
    const term = new ProtoOffer();
    term.productName = productName;
    term.geolocation = geolocation;
    term.start = start;
    term.end = end;
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.offers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: ProtoOffer) => this.offerService.searchOffer(term.productName, term.geolocation, term.start, term.end)),
    );
  }
}

class ProtoOffer {
  productName: string;
  geolocation: string;
  start: string;
  end: string;
}
