import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {OFFERS} from '../mock/offers';
import {Offer} from '../models/offer.model';
import {MessageService} from '../models/message.service';
import {LOANS} from '../mock/loans';
import {Loan} from '../models/loan.model';


@Injectable({providedIn: 'root'})
export class LoanService {

  constructor(
    private messageService: MessageService,
    private Product: MessageService,
  ) {
  }

  getLoans(): Observable<Loan[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('LoanService: fetched offers');
    return of(LOANS);
  }

  getLoan(id: number): Observable<Loan> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`LoanService: fetched offer id=${id}`);
    return of(LOANS.find(loan => loan.id === id));
  }

  getLoansOfLoanee(wallet: string): Observable<Loan[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`LoanService: fetched offer id=${wallet}`);
    return of(LOANS.filter(loan => loan.loanee === wallet));
  }

  getLoansOfLoaner(wallet: string): Observable<Loan[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`LoanService: fetched offer id=${wallet}`);
    return of(LOANS.filter(loan => loan.loanee === wallet));
  }
}
