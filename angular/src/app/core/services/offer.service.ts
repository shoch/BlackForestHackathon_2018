import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {OFFERS} from '../mock/offers';
import {Offer} from '../models/offer.model';
import {MessageService} from '../models/message.service';
import {BCS} from './bcs';


@Injectable({ providedIn: 'root' })
export class OfferService {  

  constructor(private messageService: MessageService) {       
   }

  async getOffers(): Observable<Offer[]> {
    // TODO: send the message _after_ fetching the heroes
     //this.messageService.add('OfferService: fetched offers');
    //return of(OFFERS);
    await BCS.init(); 
    var offers = await BCS.GetOffers()   
    return offers;
  }

  async getOffer(id: number): Observable<Offer> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`OfferService: fetched offer id=${id}`);
    //return of(OFFERS.find(offer => offer.id === id));
    await BCS.init(); 
    var offer = await BCS.GetOfferBy(id);
    return offer;
  }
}
