import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-contacts-modal',
  templateUrl: 'contacts-modal.html'
})
export class ContactsModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
