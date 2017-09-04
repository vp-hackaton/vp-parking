import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

 booleanAuthenticated;
 userName = "";

 constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  isAuthenticated() {
    // this.afAuth.authState;
    return this.booleanAuthenticated;
  }

  login(username: string, password: string) {
    // this.afAuth.auth.signInWithEmailAndPassword(username, password)
    this.booleanAuthenticated = true;
    localStorage.setItem("isAuthenticated", this.booleanAuthenticated);
    localStorage.setItem("userSession", username);

    this.router.navigateByUrl('main');    


    this.userName = username;
  }

  getAuthenticatedUser() {
    return this.userName;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
