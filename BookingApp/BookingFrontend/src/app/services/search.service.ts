import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { InputData } from '../models/inputData';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  inputData: BehaviorSubject<InputData> = new BehaviorSubject({
    destination: '',
    date: ['', ''],
    options: {
      adult: 2,
      children: 1,
      room: 1,
    },
  });

  setDestination(inputData: InputData) {
    this.inputData.next(inputData);
  }

  getDestination(): Observable<InputData> {
    return this.inputData;
  }

  constructor() {}
}
