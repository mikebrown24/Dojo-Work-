function sumVarXandY(x,y){
    var sum = 0;
    for(var i = x; i <= y; i++){
        sum = sum + i;
    }
    console.log(sum);
}
sumVarXandY(1,2);


function findMin(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
        console.log(min);
}
findMin([1,8,7,4,-3,9,15]);


function findAverage(arr){
    var sum = 0;
    for(var i = 1; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum/arr.length);
}
findAverage([4,8,3,9,10,2]);

var sumVarXandY = function(x,y){
    var sum = 0;
     for(var i = x; i <= y; i++){
         sum = sum + i;
     }
     return sum;
}


var findMin = function(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
        min = arr[i];
        }
        return min;
     }
 }
 
 
 var findAverage = function(arr){
     var sum = 0;
     for(var i = 1; i < arr.length; i++){
         sum = sum + arr[i];
     }
     return sum/arr.length;
}

var myObject = {
    sumVarXandY: function(x,y) {
    var sum = 0;
    for(var i = x; i <= y; i++){
         sum = sum + i;
     }
     return sum;
},
    findMin: function(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        return min;
    }
},
    
    findAverage: function(arr) {
    var sum = 0;
    for(var i = 1; i < arr.length; i++){
        sum = sum + arr[i];
     }
     return sum/arr.length;
    }

}

var person = {};
person = {
    name: "Mike",
    distance_traveled: 0,
}
function say_name(){
    console.log(person.name);
}
say_name();
function say_something(quote){
    console.log(person.name + " says" + quote);
}
say_something(" I am cool dude!");
function walk(){
    console.log(person.name + " is walking");
    person.distance_traveled = person.distance_traveled + 3;
    console.log(person.distance_traveled);
}
function run(){
    console.log(person.name + " is running");
    person.distance_traveled = person.distance_traveled + 10;
    console.log(person.distance_traveled);

}
function crawl(){
    console.log(person.name + " is crawling");
    person.distance_traveled = person.distance_traveled + 1;
    console.log(person.distance_traveled);
}
walk(), run(), crawl();
