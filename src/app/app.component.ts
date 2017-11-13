import { Component } from '@angular/core';

import { AuthService } from 'angular4-social-login';
import { SocialUser, FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
