var myCat = {
    "name": "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
}
/* ^ That is an entire OBJECT. To get something from an object, all you have to 
do is this...... myCat.name.....or myCat.species.... or myCat.favFood.. */

var myFavColors = ['blue', 'green', 'purple', 'red'];

/* In order to grab something from an array, we would do ..... myFavColors[1] - to grab green,
myFavColors[2] - to grab purple, myFavColors[3] - to grab red. */

var thePets =[              /* <- This is a variable that contains all of our data! */
    {
        "name": "Meowsalot",
        "species": "cat",
        "favFood": "tuna" 
    },
    {                                   /* All of this is an example of JSON! Objects and Arrays nested inside of each other! */
        "name": "Barky",
        "species": "dog",
        "favFood": "carrots"
    }
]

/* Now to reach barky's favorite food, we would type this out */
thePets[1].favFood - /* This would now return carrots */



/* LET'S MOVE ON TO AJAX */
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    var ourData = ourRequest.responseText;
    console.log(ourData[0]);
};
ourRequest.send();
