import {Component} from '@angular/core';

export default  class DatepickerAngularComponent {
  static get annotations() {
    return [
      new Component({
        template: require('./datepicker.html')
      })
    ]
  }
  constructor(){
    this.DatepickerRangeHtml = `
    <datepicker-range [(start)]="start1" [(end)]="end1"></datepicker-range>`

    this.DatepickerSimpleHtml = `
    <datepicker [(ngModel)]="start3"></datepicker>`



    this.Display = "Example";

    this.start1 = "2017-05-01";
    this.end1 = "2017-05-22";
    this.start2 = "2017-05-01";
    this.end2 = "2017-05-22";
    this.start4 = "2017-05-01";
  }
}


DatepickerAngularComponent.parameters = [];
