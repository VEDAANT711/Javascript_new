//
var n = [33,4,55,66] 
var n1 = n.reduce(function(acc,el,index){
    return el + acc
},0)
console.log(n1)

//
var marks = [34,33,56,78,54,98,69,90,99,87]
var m = marks.filter(function(el,index,arr){
    return el < 50
})
console.log(m +" - FAILED")


//
var m1 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(m1 + " - PASS")


// FOR EACH()

var city = ["agra","lucknow","darjeeling","chennai"]
var z = city.forEach(function(el,index,arr){
    console.log(el + " welcome")
})
console.log(z)


// FIND()

var n = [1,2,3,4,5,6,7]
var q1 = n.find(function(el,index,arr){
    return el > 5
})
console.log(q1)

// FINDINDEX()

var n1 = [32,39,45,6,7,3,4,6]
var n11 = n.findIndex(function(el,index,arr){
    return el > 6
})
console.log(n11)


// EVERY()

var w1 = [3,4,5,6,7,8,9]
var w11 = w1.every(function(el,index,arr){
    return el > 6
}) 
console.log(w11)

// SOME()

var numV = [11,2,33,11,22,33,44,55,66]
var q10 = numV.some(function(el,index,arr){
    return el > 500
})
console.log(q10)

// SLICE 

var no = [111,222,33,444,555,66,77,888,999,1000]
console.log(no.slice(3))
console.log(no.slice(3,6))
console.log(no.slice(-10,6))
console.log(no.slice(1,3))
console.log(no.slice(-1,-3))






































