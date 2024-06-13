//LEXICAL SCOPE
function additionA(){
    let A = 10
    let B = 20
    function additionB(){
        let C = 30
        let D = 40
        console.log(A+B+C+D)
        function additionC(){
            let E = 50
            let F = 60
            console.log(A+B+C+D+E+F) 
        }
        additionC()
    }
    additionB()
}
additionA()


function add(){
    console.log("hello")
    console.log(9+3)
    return "BYE"
    console.log(9+4)
}
let a1 = add()
console.log(a1)



function hello(){
    return function(){
        console.log("Hii")
    }
}
// let q = hello()
//     let q =  function(){
//         console.timeLog("hello")

//     }
// E()    

// CLOSURES



function A(){
    let a = 4
    let b = 3
    return function(){
        console.log(a+b)
    }
}
let l = A()
console.log(l)
 let a  = function(){
     console.log(a+b) 
    
}
A()

function additionF(x,y){
    return x + y
}
let e = additionF(12,3)
console.log(e)


let additionF2 = function(x,y){
    return x + y
}
let e2 = additionF2(12,3)
console.log(e2)

// arrow function 

let div =(x,y)=> x + y
let e3 = div(12,3)
console.log(e3)










