var a = 89473498
console.log(a)
console.log(typeof a)
  

let b = 89048409
console.log(typeof b)


let numT = 50

if(numT > 0 && numT <= 5){
    console.log("20% Discount")
}
if (numT > 5 && numT <= 10){
    console.log("30% discount")
}
if (numT < 10 && numT <= 10 ){
    console.log("30% Discount")
}
if (numT > 10){
    console.log("Eligible For Higher Discount")
}



var marks = 20

if (marks > 95){
    console.log("GRADE A")
}
else if (marks >= 75){
    console.log("GRADE B")
}
else if (marks >= 50){
    console.log("GRADE C")
}
else if (marks <= 35){
    console.log("FAIL")
}



let i = -100
let j = -10 
let k = -1

if(i > j && i > k){
    console.log("i is greater")
}
else if(j > i && j > k){
    console.log("j is greater")
}
else {
    console.log("k is greater")
}

