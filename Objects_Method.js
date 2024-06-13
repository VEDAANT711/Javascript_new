let ved = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
let vijeet = {
    firstName:"vijeet",
    lastName:"dani"
}
var displayName1 = ved.displayName
var displayName1  = function(){
    console.log(this.firstName + this.lastName)
}
displayName1()

// bind

var q = displayName1.bind(vijeet)
var q  = function(){
    console.log(vijeet.firstName + vijeet.lastName)
}

q()



var shivani = {
    firstName:"shivani",
    lastName:"hedau"
}

var hrushali = {
    firstName:"hrushali",
    lastName:"patil"

}
var vedant = {
    firstName:"vedant",
    lastName:"gaikwad"
}

var displayName3 = function(){
    console.log(this.firstName + this.lastName)
}

displayName3.bind(shivani)()
displayName3.bind(hrushali)()
displayName3.bind(vedant)()



var shivani1 = {
    firstName:"shivani",
    lastName:"hedau"
}

var hrushali1 = {
    firstName:"hrushali",
    lastName:"patil"

}
var vedant1 = {
    firstName:"vedant",
    lastName:"gaikwad"
}

let displayName4 = function(greet){
    console.log(this.firstName + this.lastName)
    console.log(greet)
}
displayName4.call(shivani,"hello")
displayName4.call(hrushali,"hello")
displayName4.call(vedant,"hello")


// apply
displayName4.apply(shivani,["bye","hi","bye","good bye","tc"])


