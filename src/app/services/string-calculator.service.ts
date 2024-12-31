import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(numbers: string): number{
    if (!numbers) return 0;
    
    let delimiter = /,|\n/;
    /* Check for comments and use the delimiter specified in the comment */
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }
    /* split the string by the delimiter and convert each element to a number */
    const positiveNumbers = numbers.split(delimiter).map(Number);   
    
    /* calculate the sum of the positive numbers */
    return positiveNumbers.reduce((sum, curr) => Number(sum + (isNaN(curr) ? 0 : curr)), 0);
  }

  constructor() { }
}
