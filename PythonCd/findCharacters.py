'''Write a program that takes a list of strings and a string containing a single character, 
and prints a new list of all the strings containing that character.

Here's an example:

# input
l = ['hello','world','my','name','is','Anna']
char = 'o'
# output
n = ['hello','world']

Hint: how many loops will you need to complete this task?'''
def findChar(lst,str): #TAKES A LIST OF STRINGS AND A STRING CONTAINING A SINGLE CHARACTER
    new_list = []
    for value in lst:
        if str in value:
            new_list.append(value)

    print new_list
M = ['hello', 'my','name','is', 'mike']
findChar(M,'i')






    