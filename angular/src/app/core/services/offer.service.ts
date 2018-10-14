import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {OFFERS} from '../mock/offers';
import {Offer} from '../models/offer.model';
import {MessageService} from '../models/message.service';

import {Web3Service} from './web3.services';

@Injectable({providedIn: 'root'})
export class OfferService {

  private web3: Web3Service = new Web3Service();

  constructor(private messageService: MessageService) {
  }

  getOffers(): Observable<Offer[]> {
    this.messageService.add('OfferService: fetched offers');
    return of(OFFERS);
  }

  getOffer(id: number): Observable<Offer> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`OfferService: fetched offer id=${id}`);
    return of(OFFERS.find(offer => offer.id === id));
  }

  searchOffer(productName: string, geolocation: string, start: string, end: string) {
    if (!('offenburg'.includes(geolocation.toLocaleLowerCase())) || !('the hammer'.includes(productName.toLocaleLowerCase()))) {
      return of([]);
    }
    //  of(OFFERS.find(offer => (Date.parse(offer.start) <= Date.parse(start))))&& (new Date(offer.end) >= new Date(end))
    return of(OFFERS); //
  }
}
