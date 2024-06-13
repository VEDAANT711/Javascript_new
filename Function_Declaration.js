
let chinmay = {
    firstName:"chinmay",
    lastName:'deshpande',
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
chinmay.displayName()

let amol  = {
    firstName:"amol",
    lastName:"rao",
}

var displayName2  = chinmay.displayName
var displayName2 = function(){
    console.log(this.firstName + this.lastName)
}
var arr = displayName2.bind(amol)
var arr = function(){
        console.log(amol.firstName + amol.lastName)
    }


console.log(chinmay.firstName)
console.log(chinmay.lastName)
chinmay.displayName()



let amolA = {
    firstName:"amolA",
    lastName:"raoA"
} 
let amolB = {
    firstName:"amolB",
    lastName:"raoB"
} 

let amolC = {
    firstName:"amolC",
    lastName:"raoC"
} 

let displayName = function(){
    console.log(this.firstName + this.lastName)
}
let q1 = displayName.bind(amolA)
let q2 = displayName.bind(amolB)
let q3 = displayName.bind(amolC)


let displayName3 = function(greet){
    console.log(this.firstName+ this.lastName)
    console.log(greet)
}

displayName3.call(amolA,"hello")
displayName3.call(amolB,"hello2")
displayName3.call(amolC,"hello3")


displayName3.apply(amolA,["bye"])
displayName3.apply(amolA,["bye2"])
displayName3.apply(amolA,["bye3"])



//function declaration//
function displayColor(cl){
    return cl + "G"
}
let r = displayColor("green")
console.log(r)



let  displayColor3 = function(cl){
    return cl + "G"
}
let r2 = displayColor3("green")
console.log(r2)

var  displayColor4 = (cl)=>{
    return cl + "G"
}
var r3 = displayColor4("green")
console.log(r3)

var  displayColor4 = (cl)=>cl + "G"
var r4 = displayColor4("green")
console.log(r3)