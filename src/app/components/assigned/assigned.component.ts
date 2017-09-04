import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { UserAssigned } from '../../model/UserAssigned.type';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent implements OnInit {

  monthlyUsers: FirebaseListObservable<UserAssigned[]>;

  constructor(private parkingService: ParkingService) { }

  ngOnInit() {
    this.monthlyUsers = this.parkingService.getMonthlyUsers();
    console.log(this.monthlyUsers);
  }

}
