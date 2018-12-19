import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public username = 'admin';
  public password = '000000';

  constructor() { }
}
