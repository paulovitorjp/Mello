import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { MeetingPage } from '../meeting/meeting';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  stackPage(page:any, mode:string) {
    if(page == 'meeting')
      this.navCtrl.push(MeetingPage, {mode: 'new'});
    else if (page == 'activity')
      this.navCtrl.push(ActivityPage, {mode: 'new'});
  }

}
