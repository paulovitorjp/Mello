import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MeetingPage } from '../pages/meeting/meeting';
import { ActivityPage } from '../pages/activity/activity';
import { MeetingService } from '../providers/meeting-service';
import { AngularFireModule } from 'angularfire2';
import { ActivityCardComponent } from '../components/activity-card/activity-card';
import { MeetingCardComponent } from '../components/meeting-card/meeting-card';
import { ContatosModalPage } from '../pages/contatos-modal/contatos-modal';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWtM4At5PUa70K2ms-XfDqPg3dQOeI62g",
  authDomain: "mello-41031.firebaseapp.com",
  databaseURL: "https://mello-41031.firebaseio.com",
  storageBucket: "mello-41031.appspot.com",
  messagingSenderId: "345347713220"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ActivityPage,
    MeetingPage,
    ContatosModalPage,
    ActivityCardComponent,
    MeetingCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ActivityPage,
    MeetingPage,
    ContatosModalPage,
    ActivityCardComponent,
    MeetingCardComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeetingService
  ]
})
export class AppModule {}
