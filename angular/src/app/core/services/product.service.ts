import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {MessageService} from '../models/message.service';
import {PRODUCTS} from '../mock/products';
import {Product} from '../models/product.model';


@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ProductService: fetched offers');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ProductService: fetched offer id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }
}
