
let Sallu = {
    fn:"Salman",
    ln:"Khan",
    displayName:function(){
        console.log(this.fn+this.ln)
    }
}
console.log(Sallu.fn)
console.log(Sallu.ln)
Sallu.displayName()



function Sharukh(fn,ln){
    this.firstname = fn
    this.lastname = ln
    this.displayname = function(){
        console.log(this.firstname + this.lastname)
    }
}

let Badshah = new Sharukh("Sharukh","Khan")
console.log(Badshah)

Badshah.displayname()




function Tata(hr,pn){
    this.modle = hr
    this.color = pn 
}

let modle = new Tata("harrier","black")
let color = new Tata("punch","red")
console.log(modle)
console.log(color)


console.log(modle.__proto__ === Tata.prototype)
console.log(color.__proto__ === Tata.prototype)

Tata.prototype.displayName = function(){
    console.log(this.firstname + this.lastname)
}
Tata.prototype.country = "INDIA"

modle.displayName()
color.displayName()




let names = ["ved","sid","taksh","piyu","varad"]
console.log(names)
names.pop()
console.log(names.__proto__ === Array.prototype)


// Array.prototype.ved = function(){
//     console.log("hi vedu")
// }
// names.ved()



console.log(names instanceof Array)
console.log(modle instanceof Tata)
console.log(color instanceof Tata)



let q = Tata.hasOwnProperty("modle")
let b  = Tata.hasOwnProperty("color")
let a = Tata.hasOwnProperty("country")
console.log(q)
console.log(a)
console.log(b)