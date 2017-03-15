import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { MeetingPage } from '../meeting/meeting';
import { MeetingService} from '../../providers/meeting-service';

/**
 * Interface for ordering by dateTime
 */
interface Orderable {
  dateTime: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private next: Array<Orderable>;
  private previous: Array<Orderable>;

  constructor(public navCtrl: NavController, public meetSrvc: MeetingService) {
    [this.next, this.previous] = this.splitByDate(
      this.reduceObjectsIntoArray([
        this.meetSrvc.meetings,
        this.meetSrvc.activities]
      )
    );
    // console.log('next');
    // console.log(this.next);
    // console.log('previous');
    // console.log(this.previous);
  }

  /**
   * Reduces an array of objects into a one dimensional array.
   * @param values The array of Objects to be reduced.
   */
  reduceObjectsIntoArray(values: Array<Object>): Array<Orderable> {
    // console.log('before reduce');
    // console.log(values);
    let temp: Array<Orderable> = new Array<Orderable>();
    values.reduce((prev, cur) => {
      let keys = Object.getOwnPropertyNames(cur);
      for (let key of keys) {
        temp.push(cur[key]);
      }
      return temp;
    }, temp);
    // console.log('after reduce');
    // console.log(temp);
    return temp;
  }

  /**
   * Receives an one dimensional array of Orderable objects and splits it into next and previous arrays.
   * @param values Array of Orderables to be splitted.
   */
  splitByDate(values: Array<Orderable>): Array<Array<Orderable>> {
    values = this.sortByDate(values, 'd');
    let now = new Date().getTime();
    // console.log('NOW');
    // console.log(now);
    let i;
    for (i=0; i < values.length; i++) {
      if(values[i].dateTime < now) {
        // console.log('iteration:'+i);
        // console.log('found split point');
        break;
      }
    }
    return [values.slice(0,i), values.slice(i,values.length)];
  }

  /**
   * Receives an array and sorts it by dateTime
   * @param values Array to be sorted by property dateTime
   * @param order Indicates whether it should order ascending, 'a', or descending, 'd'.
   */
  sortByDate(values: Array<Orderable>, order:string): Array<Orderable> {
    // console.log('before sort');
    // for(let item of values) {
    //   console.log(item.dateTime);
    // }
    switch(order) {
      case 'a': //ascending
        values.sort((a, b)=>{
          return a.dateTime - b.dateTime;
        });
        break;
      case 'd': //descending
        values.sort((a, b)=>{
          return b.dateTime - a.dateTime;
        });
        break;
      default:
        console.error('[home.ts -> sortByDate] Invalid order specified.');
    }
    // console.log('after');
    // for(let item of values) {
    //   console.log(item.dateTime);
    // }
    return values;
  }

  stackPage(page: any, mode: string) {
    if (page == 'meeting')
      this.navCtrl.push(MeetingPage, { mode: 'new' });
    else if (page == 'activity')
      this.navCtrl.push(ActivityPage, { mode: 'new' });
  }

}
