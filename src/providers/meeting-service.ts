import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Relationships have been kept as Objects to easily integrate with Firebase, maintaining the relational database look and feel.
  {'key1':true,'key2':true}
*/
@Injectable()
export class MeetingService {

  public _meetings:Object;
  /**
   * _meetings = {
   *    'meetingKey': {Meeting Object},
   *    ...
   * }
   */

  constructor() {
    let meet1 = new Meeting(
      'Definição Recuperação Senha',
      'Reunião para definição do método de recuperação de senha a ser usado pelo RTM Messenger.',
      1487008800000, {}, {});//TODO
    this._meetings = {

    };
  }
  
  get meetings(): Object {
    return this._meetings;
  }

  set meetings(value:Object) {
    this._meetings = value;
  }

}

export class Meeting {

  static class:string = "meeting";

  constructor(title: string, description: string, dateTime: number, participants: Object, activities: Object) {
    this._title = title;
    this._description = description;
    this._dateTime = dateTime;
    this._participants = participants;
    this._activities = activities;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateTime(): number {
    return this._dateTime;
  }

  set dateTime(value: number) {
    this._dateTime = value;
  }

  get participants(): Object {
    return this._participants;
  }

  set participants(value: Object) {
    this._participants = value;
  }

  get activities(): Object {
    return this._activities;
  }

  set activities(value: Object) {
    this._activities = value;
  }

  public _title:string;
  public _description:string;
  public _dateTime:number;
  public _participants:Object;
  public _activities:Object;

}

export class Contact {

  static class:string = "contact";

  constructor(name: string, email: string, phone: string, companies: Object, notes: string) {
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._companies = companies;
    this._notes = notes;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get companies(): Object {
    return this._companies;
  }

  set companies(value: Object) {
    this._companies = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  private _name:string;
  private _email:string;
  private _phone:string;
  private _companies:Object;
  private _notes:string;

}

export class Company {

  static class:string = "company";

  constructor(name: string, address: string, notes: string) {
    this._name = name;
    this._address = address;
    this._notes = notes;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  private _name:string;
  private _address:string;
  private _notes:string;

}

export class Activity {

  static class:string = "activity";

  constructor(title: string, description: string, owners: Object, dueDate: number) {
    this._title = title;
    this._description = description;
    this._owners = owners;
    this._dueDate = dueDate;
    this._status = 'incomplete';
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get owners(): Object {
    return this._owners;
  }

  set owners(value: Object) {
    this._owners = value;
  }

  get dueDate(): number {
    return this._dueDate;
  }

  set dueDate(value: number) {
    this._dueDate = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  private _title:string;
  private _description:string;
  private _owners:Object;
  private _dueDate:number;
  private _status:string;

}
