import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;

  constructor() { 
    
    let user_mock = new User();
    user_mock.id       = 1;
    user_mock.name     = "Rafael Ross";
    user_mock.email    = "rafaellross@gmail.com";
    user_mock.company  = "Smart Plumging Solutions";

    this.user = user_mock;
  }
}
