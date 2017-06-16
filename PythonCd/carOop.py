class Car(object):

    def __init__(self, price, speed, fuel, mileage, tax = 0.12):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = tax
        if(self.price > 10000):
            self.tax = 0.15
        self.display_all()
    
    def display_all(self):
        car_info = ""
        car_info += "Price:" + str(self.price) + "  "
        car_info += "Speed:" + str(self.speed) + "  "
        car_info += "Fuel:" + str(self.fuel) + "  "
        car_info += "Mileage:" + str(self.mileage) + "  "
        car_info += "Tax:" + str(self.tax) + "  "
        print car_info
        return self
    
jeep = Car(2000,200,0,25)