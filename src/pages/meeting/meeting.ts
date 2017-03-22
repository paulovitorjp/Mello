import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MeetingService } from '../../providers/meeting-service';
import { ContactsModalPage } from "../contacts-modal/contacts-modal";

/*
  Generated class for the Reuniao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html'
})
export class MeetingPage {

  private mode:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public meetSrvc: MeetingService,
              public modalCtrl:ModalController) {
    this.mode = navParams.get('mode');
  }

  addParticipant() {
    let participantModal = this.modalCtrl.create(ContactsModalPage);
    participantModal.present();
  }


}
