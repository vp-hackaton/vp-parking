import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAY7lqosjirUpzvMTaas2Ht1Y8Xn7DrWoc",
  authDomain: "vpparking-de51c.firebaseapp.com",
  databaseURL: "https://vpparking-de51c.firebaseio.com",
  projectId: "vpparking-de51c",
  storageBucket: "vpparking-de51c.appspot.com",
  messagingSenderId: "663791469284"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthenticationService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
