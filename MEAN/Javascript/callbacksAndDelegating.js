
CALLBACKS

// This code will have two Libby's printed in the console, but separated by two seconds.
var ninja = 'Libby';
setTimeout( function (){ console.log(ninja); }, 2000 );
console.log(ninja);
//

// Just to make sure we are clear on the ability to pass a function as an argument into another
// function, consider the following, synchronous code:
var a = 2;
var b = function() { console.log("something"); };

function doSomething(x) {
  console.log(typeof(x));
}

doSomething(a);
doSomething(b);
// Variable a is a number, while b is a function, which we have confirmed by logging the typeof
// argument that was passed into our doSomething function. Now, what if we wanted to alter our code so that if
// the data type of the argument is a function, invoke that function.
function doSomething(possibleCallback) {
  if (typeof(possibleCallback) === 'function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}
doSomething(function myCallback(){ console.log('yes, I am a callback!') });
doSomething('string');





// Mike, since you're still a little but unfamiliar with the concept, take this example:
function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  console.log("Pasta is done!");
  return pasta + " Pasta! Voila!";
}
makePasta("Penne");
makePasta("Farfalle");
// Okay we made our pasta, but it's very bland with no sauce. NOW, we have to add in our functions
// for making the sauce as well.

function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}


// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));


// notice lack of parentheses after makeAlfredo.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));




DELEGATION




Coding Dojo uses delegation: We have multiple bootcamp leaders who all 
(though they might seem like clones) have different strengths 
(let’s call them delegates). If Coding Dojo needed a bootcamp leader to lead a 
new Java Android class, the company wouldn’t just grab anyone. It rather would 
delegate a bootcamp leader who knows Java Android.

The code/pseudocode might look like this:

function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}
function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);



Here is another example:
// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
 var result = doSomething();         // store the return value of the callback parameter
 console.log(result);                // print the result!
}
printResult(function returnFive(){ return 5 })  // this should print "5", would still work if 
// you took out returnFive and just left it as function().




