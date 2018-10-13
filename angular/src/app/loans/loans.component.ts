import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../core/models/offer.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {LoanService} from '../core/services/loan.service';
import {Loan} from '../core/models/loan.model';
import {UserService} from '../core/services/user.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  @Input() loans: Loan[];
  @Input() loaned: Loan[];
  wallet: string;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private userService: UserService,
    private location: Location
  ) {
  }

  ngOnInit() {
    if (this.loans === undefined) {
      this.getLoans();
    }
  }

  getLoans(): void {
    this.wallet = this.route.snapshot.paramMap.get('wallet');
    this.loanService.getLoansOfLoanee(this.wallet).subscribe(loans => this.loans = loans);
    this.loanService.getLoansOfLoaner(this.wallet).subscribe(loans => this.loaned = loans);
  }

}
