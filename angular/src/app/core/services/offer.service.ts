import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {OFFERS} from '../mock/offers';
import {Offer} from '../models/offer.model';
import {MessageService} from '../models/message.service';

import {Web3Service} from './web3.services';

@Injectable({providedIn: 'root'})
export class OfferService {

  constructor(private messageService: MessageService) {
  }

   getOffers(): Observable<Offer[]> {
    // TODO: send the message _after_ fetching the heroes
     this.messageService.add('OfferService: fetched offers');
    return of(OFFERS);
   
  }

  getOffer(id: number): Observable<Offer> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`OfferService: fetched offer id=${id}`);
    return of(OFFERS.find(offer => offer.id === id));
   
  }
}
