function personConstructor(name){
    var person = {};
    person = {
        name: name,
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
}
personConstructor("Mike");


function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
function levelUp(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    console.log(ninja);
  }
  ninja.belt = belts[ninja.beltLevel];
    console.log(ninja);
}
ninjaConstructor("Hello", "MEAN");