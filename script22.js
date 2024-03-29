class Tata {
    engine(){
        console.log("I am engine from Tata")
    }
    milage(){
        console.log("I am milage from Tata")
    }
}

// overriding
class Punch extends Tata {
    engine(){
        console.log("I am engine from Punch")
    }
    milage(){
        console.log("I am milage from Punch")
    }
}

class Harrier extends Tata {
    engine(){
        console.log("I am engine from Harrier")
    }
    milage(){
        console.log("I am milage from Harrier")
    }
}

let Tata1 = new Punch()
Tata1.engine()
Tata1.milage()

let Tata2 = new Harrier()
Tata2.engine()
Tata2.milage()