import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('StringCalculatorService should return 0 for an empty string', () => {
    const service = new StringCalculatorService();
    expect(service.add("")).toEqual(0);
    expect(service.add(" ")).toEqual(0);
  });

  it('should return the number itself for a single number', () => {
    expect(service.add("1")).toEqual(1);
    expect(service.add("5")).toEqual(5);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add("1,2")).toEqual(3);    
    expect(service.add("10,20")).toEqual(30);
  });

  it('should return the sum of three numbers', () => {
    expect(service.add("1,2,3")).toEqual(6);
    expect(service.add("10,20,30")).toEqual(60);
  });  

  it('should handle newlines as delimiters', () => {
    expect(service.add("1\n2,3")).toEqual(6);
  });

  it('should support custom delimiters', () => {
    expect(service.add("//;\n1;2")).toEqual(3);
  }); 

});
