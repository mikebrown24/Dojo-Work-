 var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
     for(var i = 0; i < x.length; i++){
         console.log(i);
         
     }

     x.push(100); //Push value into array x 

     x.push(["hello", "world", "JavaScript is Fun"])
     console.log(x); // Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. 
     //Log x in the console and analyze how x looks now. 

     var sum = 0;
     for(var i = 0; i < 501; i++){
         sum = sum + i;
     }
        console.log(sum); //Create a simple for loop that sums all the numbers between 1 to 500. 
     //Have console log the final sum

     var arr = [1,5,90,25,-3,0];
     var min = arr[0];
     for(var i = 1; i < arr.length; i++){
         if(arr[i] < min){
             min = arr[i];
         }
     }
     console.log(min); //Find the minimum value in an array

     var arr = [1,5,90,25,-3,0];
     var sum = arr[0];
     for (var i = 1; i < arr.length; i++){
         sum = sum + arr[i];
     }
     console.log(sum/arr.length); // find the average of the values in an array 

     var new_ninja = {
         name: 'Jessica',
         profession: 'Coder',
         favorite_language: 'JavaScript',
         dojo: 'Dallas'
     };

     for(var key in new_ninja){
         console.log(key + ":" + new_ninja[key]);
     } //Write a for-in loop that will navigate through the object below (or write your own object)
     // And console.log() each ey value pair.