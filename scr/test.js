
const stringLength = require('./index.js');
const reverseString = require('./reversestr.js');
const Calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');
//import stringLength from "./index.js";

describe('stringLength', () => {
    test('returns the length of a string', () => {
        expect(stringLength('hello')).toBe(5);
      });

  test('throws an error for strings shorter than 1 character', () => {
    expect(() => { stringLength('') }).toThrow();
  });

  test('throws an error for strings longer than 10 characters', () => {
    expect(() => { stringLength('This is longer than 10 characters') }).toThrow();
  });

 
});

describe('stringReverse', () => {
test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
});



describe('calculator', () => {
//suma
  test('sum', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(5);
    calculator.sum(4);
    expect(calculator.ecual).toBe(9);
  });

    test('sum', () => {
      let calculator;
      calculator = new Calculator();
      calculator.sum(10);
      calculator.sum(4);
      expect(calculator.ecual).toBe(14);
    });

      test('sum', () => {
        let calculator;
        calculator = new Calculator();
        calculator.sum(15);
        calculator.sum(14);
        expect(calculator.ecual).toBe(29);
  });

//substraccion
  test('subtraccion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(5);
    calculator.substract(4);
    expect(calculator.ecual).toBe(1);
  });

  test('subtraccion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(15);
    calculator.substract(4);
    expect(calculator.ecual).toBe(11);
  });


  test('subtraccion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(20);
    calculator.substract(5);
    expect(calculator.ecual).toBe(15);
  });




//divicion
  test('divicion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(16);
    calculator.divide(2);
    expect(calculator.ecual).toBe(8);
  });

  test('divicion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(6);
    calculator.divide(2);
    expect(calculator.ecual).toBe(3);
  });


  test('divicion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(30);
    calculator.divide(2);
    expect(calculator.ecual).toBe(15);
  });





  //multiplicacion
  test('multiplicacion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(3);
    calculator.multiplique(3);
    expect(calculator.ecual).toBe(9);
  });

  test('multiplicacion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(30);
    calculator.multiplique(3);
    expect(calculator.ecual).toBe(90);
  });

  test('multiplicacion', () => {
    let calculator;
    calculator = new Calculator();
    calculator.sum(8);
    calculator.multiplique(2);
    expect(calculator.ecual).toBe(16);
  });



  describe('capitalize', () => {
    test('capitalize', () => {
        expect(capitalize('hello')).toBe('Hello');
      });
 
});


  });
  
