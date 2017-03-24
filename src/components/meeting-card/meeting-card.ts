import { Component } from '@angular/core';
import { Meeting } from '../../providers/meeting-service';
import { MeetingPage } from '../../pages/meeting/meeting';
import { NavController } from 'ionic-angular';

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

  _meeting: any;
  humanDate: string;
  participants: number;
  activities: number;


  constructor(public navCtrl:NavController) {
  
  }

  get meeting(): any {
    return this._meeting;
  }

  set meeting(value: any) {
    this._meeting = value;
        //converts miliseconds to date string
    let tempDate = new Date(this.meeting.dateTime)
    this.humanDate = tempDate.toLocaleString();
    this.humanDate = this.humanDate.substr(0,this.humanDate.length-3);
    //converts owners keys to name strings
    let keysP = Object.getOwnPropertyNames(this.meeting.participants);
    this.participants = keysP.length;
    let keysA = Object.getOwnPropertyNames(this.meeting.activities);
    this.activities = keysA.length;
  }

  openMeeting() {
    console.log(this.meeting.id);
    this.navCtrl.push(MeetingPage, { mode: 'view', id: this.meeting.id });
  }

}
