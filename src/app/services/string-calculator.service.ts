import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(stringVal: string): number{
    if (!stringVal) return 0;
    let delimiter = /,|\n/;
    let numbers = stringVal.split(delimiter).map(Number);
    if (numbers.length > 0) {
      return numbers.reduce((acc, curr) => {
        return Number(acc + curr);
      }, 0);
    }
    return 0;
  }

  constructor() { }
}
