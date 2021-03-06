import { Component } from '@angular/core';
import { localeMomentService } from './localeMoment.service.js';

// define the first line of agenda with the name of all day.
export class agendaDayNameComponent {

  static get annotations() {
    return [
      new Component({
        selector: 'atlui-agenda-day-name',
        template: `
        <div class="dayName" *ngFor="let item of arrayDayName;">{{ locale.weekdayNames[item] | uppercase}}</div>`,
      })
    ];
  }
  constructor(localeMoment) {
    this.locale = localeMoment;
    this.arrayDayName = [0,1,2,3,4,5,6];
    var temp;
    // put in correct way all the day
    for (var i = 0; i < this.locale.firstDay; i++) {
      temp = this.arrayDayName.shift();
      this.arrayDayName.push(temp);
    }
  }

}

agendaDayNameComponent.parameters = [localeMomentService];
