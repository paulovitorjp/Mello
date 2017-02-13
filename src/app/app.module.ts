import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MeetingPage } from '../pages/meeting/meeting';
import { ActivityPage } from '../pages/activity/activity';
import { MeetingService } from '../providers/meeting-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ActivityPage,
    MeetingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ActivityPage,
    MeetingPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeetingService
  ]
})
export class AppModule {}
