import random

def coinToss():
    return random.randrange(2)
    print "Starting the program...."
heads_count = 0
tails_count = 0
for i in range(1, 5001):
    if coinToss() == 0:
        heads_count += 1
        print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(i, "head", heads_count, tails_count)
    else:
        tails_count += 1
        print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(i, "tail", heads_count, tails_count)
coinToss()
print "Ending the program! Thank you"
