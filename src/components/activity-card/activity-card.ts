import { Component } from '@angular/core';
import { MeetingService, Activity } from '../../providers/meeting-service';

/*
  Generated class for the ActivityCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'activity-card',
  templateUrl: 'activity-card.html',
  inputs: ['activity']
})
export class ActivityCardComponent {

  text: string;
  _activity: Activity;
  humanDate: string;
  owners: string;
  belongsToMeeting: string;

  constructor(public meetSrvc:MeetingService) {
  }

  get activity(): Activity {
    return this._activity;
  }

  set activity(value: Activity) {
    this._activity = value;
        //converts miliseconds to date string
    let tempDate = new Date(this.activity.dateTime)
    this.humanDate = tempDate.toLocaleString();
    this.humanDate = this.humanDate.substr(0,this.humanDate.length-3);
    //converts owners keys to name strings
    let keys = Object.getOwnPropertyNames(this.activity.owners);
    this.owners = '';
    for (let key of keys) {
      this.owners += this.meetSrvc.contacts[key].name + ' ';
    }
    this.belongsToMeeting = this.meetSrvc.meetings[Object.getOwnPropertyNames(this.activity.meeting)[0]].title;
  }


}
