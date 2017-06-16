class Bike(object):

    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    
    def displayInfo(self):
        print self.price
        print self.max_speed
        print self.miles
        return self


    def ride(self):
        print "Riding"
        self.miles += 10
        print self.miles
        return self


    def reverse(self):
        print "Reversing"
        self.miles += 5
        print self.miles
        return self


bike1 = Bike(100,20)

bike1.ride().ride().ride().reverse().displayInfo()

bike2 = Bike(100,20)

bike2.ride().ride().reverse().reverse().displayInfo()

bike3 = Bike(100,20)

bike3.reverse().reverse().reverse().displayInfo()
