import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  /** 
    @author Ravi Singhal
    @description This service is used to calculate the sum of numbers in a string.
    @param stringVal - The string containing the numbers to be added.
    @returns The sum of all numbers in the string.
    @throws Error if there are any negative numbers in the string.
  */
  add(stringVal: string): number{
    try {
      if (!stringVal) return 0;
      
      let delimiter = /,|\n/;
      /* Check for comments and use the delimiter specified in the comment */
      if (stringVal.startsWith("//")) {
        const parts = stringVal.split("\n", 2);
        delimiter = new RegExp(parts[0].slice(2));
        stringVal = parts[1];
      }

      /* split the string by the delimiter and convert each element to a number */
      let numbers = stringVal.split(delimiter).map(Number);
      let negativeNumbers = numbers.filter((num) => num < 0);

      /* Throw an error if there are any negative numbers with numbers */
      if (negativeNumbers.length) { 
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      }

      /*Sum of all numbers greater than 0 */
      if (numbers.length > 0) {
        return numbers.reduce((acc, curr) => {
          return Number(acc + (isNaN(curr)? 0 : curr));
        }, 0);
      }
      return 0;
      } catch (error) {
        console.error(" Error in StringCalculatorService.add()", error);
        throw error;    
      }
  }

  constructor() { }
}
