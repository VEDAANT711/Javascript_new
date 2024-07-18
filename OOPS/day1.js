// class Person {

//     fn = "ved"
//     ln = "007"
//     ag = 23


//     walk(){
//         console.log("walking")
//     }

//     talk(){
//         console.log("talking")
//     }
// }
// let v = new Person()
// let g = new Person()

// console.log(v.fn)
// console.log(v.ln)
// console.log(v.ag)
// v.ag = 22
// console.log(v.ag)
// console.log(g.fn)

class Person {
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }

    display(){
        console.log(this.firstname+this.lastname)
    }
}

let v = new Person("ved","007")
console.log(v.firstname)
console.log(v.lastname)
