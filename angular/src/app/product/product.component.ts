import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../core/models/product.model';
import {ProductService} from '../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  @Input() productId: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.productId;
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}
