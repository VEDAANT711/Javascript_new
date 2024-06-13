var birthyear = [2000,2001,2002,2003]
var ages = []

for(var i=0 ; i< birthyear.length ; i++){
    console.log(birthyear)
    //console.log(2024 - birthyear[i])
    var x = 2024 - birthyear[i]
    ages.push(x)
}
console.log(ages)   




birthyear = [2000,2001,2002,2003]
var e = birthyear.map(function(el,index,arr){
    return 2024 - el
})
console.log(e)


cars = ["skoda","audi","volkswagen","BMW","TATA"]
var c = cars.map(function(el){
    return el
})
console.log(c)


//add +1 in every given element
var numbers = [11,22,33,44,55,66,77,88,99]
var v = numbers.map(function(el){
    return el + 1
})
console.log(v)

// Table of 5 using map function//

var table = [1,2,3,4,5,6,7,8,9,10]
var t = table.map(function(el){
    return el * 5
})
console.log(t)

// % with map function

var random = [56,23,44,78,90,44]
var r = random.map(function(el){
    return el % 2.3
})
console.log(r)


//USING MAP & CONCAT FUNCTION
var qa = ["HELLO"]
var q = qa.map(function(el){
    return el .concat (" WELCOME")
})
console.log(q)


//
var nA = [11,33,99]
var total = 0

for(i = 0; i < nA.length ; i++){
    total = total + nA[i]
}
console.log(total)

var  nB = nA.reduce(function(acc,el,index,arr){
    return acc +el
},0)
console.log(nB)



//MULTIPLICATION OF ALL ELEMENTS

var mul = [21,67,43,89,7,23]
var m = mul.map(function(el,index,arr){
    return el + 0
})
console.log(m)

//USING REDUCE Function

var multi = mul.reduce(function(acc,el,index,arr){
    return acc * el

},1)
console.log(multi)


//USING FILTER FUNCTION

var transactions =[500,12500,6436,443,567,78900,201,345]
var deposite = transactions.filter(function(el,index,arr){
    return el >= 5000
}) 
console.log(deposite)

var withdrwal = transactions.filter(function(el,index,arr){
    return el < 1000
})
console.log(withdrwal)







