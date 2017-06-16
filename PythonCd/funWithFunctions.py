def odd_even(num):
 
    for count in range(0,2000):
        if count % 2 == 0:
            print count, "is an even number"
        else:
            print count, "is an odd number"
            
    print num

odd_even(55)