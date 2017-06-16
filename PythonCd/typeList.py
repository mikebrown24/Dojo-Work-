string_list = ['magical unicorns','19','hello','98.98','world']
integer_list = [1, 2, 3, 4, 5]
float_list = [1.0, 2.0, 3.0]
mixed_list = [8.0, 'basketball', 'boxing', 47, 3.4, 'hello', 97]

def determine_list_type(lst):
    str_count = 0
    int_count = 0
    float_count = 0
    mixed_count = 0

    for item in lst:
        if type(item) is str:
            str_count= str_count + 1
            
        if type(item) is int:
            int_count= int_count + 1
            
        if type(item) is float:
            float_count= float_count + 1
    
    if str_count== len(lst):
        print lst, "list consists of only strings"
    elif int_count== len(lst):
        print lst, "list consists of only integers"
    elif float_count== len(lst):
        print lst, "list consists of only floats"
    else:
        print lst, "The array you entered is of mixed type"
    
       
    


determine_list_type(string_list)
# => list consists of only strings
determine_list_type(integer_list)
# => list consists of only integers
determine_list_type(float_list)
# => list consists of only floats
determine_list_type(mixed_list)



