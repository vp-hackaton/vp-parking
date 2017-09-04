import { Component } from '@angular/core';
import {AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private auth: AuthenticationService,     private router: Router) {
  }

  check() {
    console.log("Checking loggin: ", localStorage.getItem('isAuthenticated'));
    return (localStorage.getItem('isAuthenticated') == "true") ? true : false;
  }

  logout() {
   localStorage.clear();
   this.router.navigateByUrl('login');    

  }

  getAuthenticatedUser() {
    return localStorage.getItem("userSession");
  }
}
