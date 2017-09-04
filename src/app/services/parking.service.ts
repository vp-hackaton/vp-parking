import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ParkingService {

  constructor(private db: AngularFireDatabase) { }

  getMonthlyUsers() {
    return this.db.list('user_assigned', {
      query: {
        orderByChild: 'is_monthly',
        equalTo: true
      }
    });
  }

}
