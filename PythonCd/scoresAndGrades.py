from random import randint
def reportCard():
    print "Scores and Grades"
    value = randint(60,100)
    for i in range(0,11):
        value = randint(60,100)
        if value <= 69:
            print "Score:" , value ,  "Your grade is D"
        elif value <= 79:
            print "Score:" , value , "Your grade is C"
        elif value <= 89:
            print "Score:" , value , "Your grade is B"
        elif value <= 100:
            print "Score:" , value , "Your grade is A"

reportCard()

 

