import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {LoanService} from '../core/services/loan.service';
import {Loan} from '../core/models/loan.model';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  @Input() loan: Loan;
  @Input() wallet: string;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    if (this.loan === undefined) {
      this.getLoan();
    }
  }

  getLoan(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoan(id)
      .subscribe(loan => this.loan = loan);
  }
}
