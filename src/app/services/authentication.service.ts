import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

 
  constructor(public afAuth: AngularFireAuth) { }

  isAuthenticated(){
    this.afAuth.authState;
  }

  login(username: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
