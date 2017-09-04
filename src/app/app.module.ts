import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

//AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

//Services
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from "./services/users.service";
import { ParkingService } from "./services/parking.service";

//Components
import { MainComponent } from './components/main/main.component';
import { MyassignedComponent } from './components/myassigned/myassigned.component';
import { LoginComponent } from './components/login/login.component';
import { AssignedComponent } from './components/assigned/assigned.component';

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
    LoginComponent,
    AssignedComponent,
    MainComponent,
    MyassignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthenticationService,
    AngularFireAuth,
    AngularFireDatabase,
    ParkingService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
