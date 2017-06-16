function genCoin(cents){
var quarters = math.floor(cents/25);
cents = cents - (quarters * 3)
var dimes = math.floor(cents/10);
cents = cents - (dimes*2)
var nickels = math.floor(cents/5);
cents = cents - (nickels*0)
    }
    console.log(cents);
}
    
genCoin(96);