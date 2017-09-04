import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { UserAssigned } from '../../model/UserAssigned.type';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-myassigned',
  templateUrl: './myassigned.component.html',
  styleUrls: ['./myassigned.component.css']
})
export class MyassignedComponent implements OnInit {

  monthlyUsers: FirebaseListObservable<UserAssigned[]>;
  msg: "";

  constructor(private parkingService: ParkingService) { }

  ngOnInit() {
    console.log("hola");
    let email = localStorage.getItem("userSession")+"@velocitypartners.net";
    console.log("email: ", email);
    this.monthlyUsers = this.parkingService.getUserAssignmentsByEmail(email);
  }

}
