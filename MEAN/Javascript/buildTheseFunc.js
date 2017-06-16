console.log("One");
function runningLogger() {
    console.log("I am running!");
}
runningLogger();



console.log("Two")
function multiplyByTen(num) {
    num = num * 10
    console.log(num);
}
multiplyByTen(5);



console.log("Three")
function stringReturnOne() {
    console.log("Hello Hello Hello")
}

function stringReturnTwo() {
    console.log("Hello World, I am Mike")
}
stringReturnOne();
stringReturnTwo();



console.log("Four")
function caller(param) {
    if (typeof (param) == 'function') {
        param();
    }
}
//TYPEOF
// var myunknown = 'hello';
// console.log(typeof(myunknown));


console.log("Five");
function myDoubleConsoleLog(param1, param2) {
    if (typeof (param1) == 'function' && typeof (param2) == 'function') {
        console.log(param1(), param2());
    }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);



console.log("Six");
function caller2(param) {
    console.log("Starting");
    //Wait two seconds 
    setTimeout(function(){
        if (typeof (param) == 'function'){
            param(stringReturnOne,stringReturnTwo);
            console.log("Ending");
            console.log("Interesting");
           }
    },2000);
   
}
caller2(myDoubleConsoleLog);
