var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
] 

function print() {
            students.forEach(function(element) {                
                console.log(element.first_name + " " + element.last_name);
            }, this);
        };
        print();