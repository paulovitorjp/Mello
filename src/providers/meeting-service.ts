import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MeetingService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MeetingService {

  public meetings:Array<Meeting>;

  constructor(public http: Http) {
    this.meetings = [];
  }

}

export class Meeting {

  constructor(title: string, description: string, dateTime: number, participant: Contact, activities: Array<Activity>) {
    this.title = title;
    this.description = description;
    this.dateTime = dateTime;
    this.participant = participant;
    this.activities = activities;
  }

  public title:string;
  public description:string;
  public dateTime:number;
  public participant:Contact;
  public activities:Array<Activity>;

}

export class Contact {

  constructor(name: string, email: string, phone: string, company: Company, notes: string) {
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._company = company;
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

  get company(): Company {
    return this._company;
  }

  set company(value: Company) {
    this._company = value;
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
  private _company:Company;
  private _notes:string;

}

export class Company {

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

  constructor(title: string, description: string, owner: Contact, dueDate: number) {
    this._title = title;
    this._description = description;
    this._owner = owner;
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

  get owner(): Contact {
    return this._owner;
  }

  set owner(value: Contact) {
    this._owner = value;
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
  private _owner:Contact;
  private _dueDate:number;
  private _status:string;

}
