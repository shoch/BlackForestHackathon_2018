import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {MessageService} from '../models/message.service';
import {User} from '../models/user.model';
import {USERS} from '../mock/user';


@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private messageService: MessageService) {
  }

  getCurrentUser(): Observable<User> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UserService: fetched users');
    return this.getUser('0xabd49c5238abbf0b5f07ce6f357f3b871d33f045');
  }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  getUser(wallet: string): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`UserService: fetched user wallet=${wallet}`);
    return of(USERS.find(user => user.wallet === wallet));
  }
}
