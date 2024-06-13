let  ved = {
    firstname : "vedu",
    lastname : "gaikwad",
    age : 23,
    rollno :76
}
 

let sid = {
    firstname : "sid",
    lastName : "gaikwad",
    age : 17,
    rollno : 56
}
 

//Es6 class

class Person1 {
    first_name = "kabir"
    last_name = "singh"
    age = 23
    rollNo = 56

    display_name(){
        console.log(this.first_name+this.last_name)
    }
}

let kabir = new Person1()
let preeti = new Person1()

console.log(preeti.first_name)
console.log(preeti.last_name)
console.log(preeti.age)
console.log(preeti.rollNo)
console.log(preeti)
preeti.display_name()
console.log(kabir)

preeti.first_name ="preeti"
preeti.last_name ="singh"
preeti.age = 23
preeti.rollNo = 55
console.log(preeti)



class Person2{
    constructor(fn,ln,age,rollNo){
        this.first_name = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    }

    displayName(){
        console.log(this.first_name + this.lastName)
    }
}
 let Ved =new Person2("ved","gaikwad",23,74)
 let Sid = new Person2("sid","gaikwad",17,56)
 Sid.city = "pune"
 console.log(Sid)

for (let key in Sid){
    console.log(key,Sid[key])
}


for (let keys in Ved){
    console.log(keys,Ved[keys])
}













