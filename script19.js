
class PersonB {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let ved = new PersonB("ved","007")
let sid = new PersonB("sid","022")
ved.city = "pune"

console.log(ved.firstName)
console.log(ved.lastName)

console.log(sid.firstName)
console.log(sid.lastName)
console.log(ved.city)



class PersonC {

    setFirstName(fn){
        this.firstName  = fn 
    }
    setLastName(ln){
        this.lastName  = ln
    }

    getLastName(){
        return this.lastName
    }
    getFirstName(){
        return this.firstName
    }

}
let vedA = new PersonC()
console.log(vedA)
vedA.setFirstName("ved")
vedA.setLastName("007")
console.log(vedA)

let a = vedA.getFirstName()
console.log(a)



let info = {
    full_name:"great khali",
    age:34
}
info.age = 67
info.city  = "pune"


class  personD {

    set fn(fn){
        this.firstName  = fn
    }
    get fn(){
        return this.firstName
    }

    set ln(ln){
        this.lastName  = ln
    }
    get ln(){
        return this.lastName
    }

}
// setting class fields as properties 
let johncena = new personD()
johncena.fn = "you can't see me"
console.log(johncena.fn)
console.log(johncena)

johncena.ln = "cena"
console.log(johncena.ln)
console.log(johncena)