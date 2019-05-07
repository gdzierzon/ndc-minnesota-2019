import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status: boolean;

  signIn() {
    this.status = true;
  }

  signOut() {
    this.status = false;
  }
}
