def name(value):
    print value
    if (type(value) is int):
        if value >= 100:
            print "That's a big number!"
        if value < 100:
            print "That's a small number."
    if (type(value) is str):
        if len(value) >= 50:
            print "Long sentence."
        if len(value) < 50:
            print "Short sentence."
    if (type(value) is list):
        if len(value) >= 10:
            print "Big List!"
        if len(value) < 10:
            print "Short List."

name([1,2,3,4,5,6,7,8,9,10,11])

