import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PostIts';
  loginText = 'Log In';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.setLoginStatus();
  }

  login() {
    if (this.authService.status) {
      this.authService.signOut();
    } else {
      this.authService.signIn();
    }

    this.setLoginStatus();
  }

  private setLoginStatus() {
    if (this.authService.status) {
      this.loginText = 'Log Out';
    } else {
      this.loginText = 'Log In';
    }
  }
}
