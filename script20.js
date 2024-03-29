//literal function

let tripleH = {
    firstname:"triple",
    lastname: "H",
    displayname:function(){
        console.log(this.firstname + this.lastname)
        
    }
}

tripleH.firstname = "rock"
console.log(tripleH.firstname)



let John = {
    firstname: "john",
    lastname:"cena",
    ability: "you can't see me!!"
}

tripleH.ability = "you can see me!!"
console.log(tripleH.ability)




class Rock {
    constructor(fn,ln){
        this.firstname = fn
        this.lastname = ln
    }

   displayname(){
    console.log(this.firstname + this.lastname)
   } 

}
let rock = new Rock("rock","sharma")
let john = new Rock("john","cena")
john.displayname()
rock.displayname()




class PersonE {

    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName
    }

}


let amolb = new PersonE()
amolb.setFirstName("amolb")
amolb.setLastName("rao")
amolb.getFirstName("amol")
