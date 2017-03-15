import { Component } from '@angular/core';
import { Meeting } from '../../providers/meeting-service';

/*
  Generated class for the MeetingCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'meeting-card',
  templateUrl: 'meeting-card.html',
  inputs: ['meeting']
})
export class MeetingCardComponent {

  _meeting: Meeting;
  humanDate: string;
  participants: number;

  constructor() {
  
  }

  get meeting(): Meeting {
    return this._meeting;
  }

  set meeting(value: Meeting) {
    this._meeting = value;
        //converts miliseconds to date string
    let tempDate = new Date(this.meeting.dateTime)
    this.humanDate = tempDate.toLocaleString();
    this.humanDate = this.humanDate.substr(0,this.humanDate.length-3);
    //converts owners keys to name strings
    let keys = Object.getOwnPropertyNames(this.meeting.participants);
    this.participants = keys.length;
  }

}
