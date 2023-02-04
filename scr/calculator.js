class Calculator {
constructor (){
this.ecual = 0 ;
};

sum(number) {
 this.ecual += number;
 return this;
}

substract(number) {
    this.ecual -= number;
    return this;
   }

   divide(number) {
    this.ecual /= number;
    return this;
   }

   multiplique(number) {
    this.ecual *= number;
    return this;
   }

}

module.exports = Calculator;