class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    
    def walk(self):
        self.health = self.health - 1
        return self

    def run(self):
        self.health = self.health - 5
        return self

    def display_health(self):
        print self.name
        print self.health
        

class Dog(Animal):
    self.health = 150
    def pet(self):
        self.health = self.health + 5
        return self


class Dragon(Animal):
    self.health = 170
    def fly(self):
        self.health = self.health - 10
        return self




animal1 = Animal()
animal1.walk().walk().walk().run().run().display_health()

dog1 = Dog()
dog1.walk().walk().walk().run().run().pet().display_health()

dragon1 = Dragon()
dragon1.walk().walk().walk().run().run().fly().fly().display_health()



