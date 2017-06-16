// start point is 2 (first number)
// end point is 10 (second number)
// skip amount is 2 (third number)
// function accepts 3 parameters with the data types: numbers.

function printRange(num1, num2, num3) {
    for( var i= num1; i <= num2; i+= num3){
       console.log(i); 
    }

}

printRange(2, 10, 2);

//start point is 2 (first number)
// end point is 10 (second number)
// skip amount is 2 (third number)
//the function accepts 3 numbers

function printRange(num1, num2, num3){
    for( i = num1; i <= num2; i+=num3){
        console.log(i);
    }
}
printRange(2,10,2);