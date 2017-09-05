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
  startDate: Date;
  calendar: Array<number[]> = [];
  days: number[] = [];

  constructor(private parkingService: ParkingService) { }

  ngOnInit() {
    let email = localStorage.getItem("userSession")+"@velocitypartners.net";
    this.monthlyUsers = this.parkingService.getUserAssignmentsByEmail(email);

    this.monthlyUsers.subscribe(item => {
      item.forEach( data => {
        console.log(data);
        data.days.forEach(dia => {
          const tokens = dia.split('-');
          const fecha = `${tokens[2]}-${tokens[1]}-${tokens[0]}T00:00:00`;
          let hola: Date = new Date(fecha);
          this.days.push(hola.getDate());
      });
      });
    });
    const today = new Date('2017-09-01T00:00:00');
    console.log("today date "+today);
    const dayOfWeek = today.getDay();
    console.log("Day of week "+dayOfWeek);
    let calDate = new Date()
    calDate.setDate(today.getDate() - dayOfWeek);
    console.log("start date "+calDate);
    for (let linea = 0; linea < 5; linea++) {
      let semana = new Array<number>();
      for (let columna = 0; columna < 7; columna++) {
        semana.push(calDate.getDate());
        calDate.setDate(calDate.getDate() + 1);
      }
      this.calendar.push(semana);
    }
    console.log(this.calendar);
  }

  getCalClass(day: number) {
    let clase = '';
    this.days.forEach(dia => {
      if(dia == day){
        clase = 'current-day';
      }
    });
    // if((day === 1) && (this.classFoCal === '')){
    //   this.classFoCal = 'next-month';
    //   return this.classFoCal;
    // }
    // if( (day === 1) && (this.classFoCal === 'prev-month')){
    //   this.classFoCal='';
    //   return this.classFoCal;
    // }
    return clase;
  }

}
