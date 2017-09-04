import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

 booleanAuthenticated = false;

 constructor(public afAuth: AngularFireAuth) { }

  isAuthenticated(){
    // this.afAuth.authState;
    return this.booleanAuthenticated;
  }

  login(username: string, password: string){
    // this.afAuth.auth.signInWithEmailAndPassword(username, password)
    this.booleanAuthenticated = true;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
