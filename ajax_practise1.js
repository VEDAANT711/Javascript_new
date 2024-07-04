function additionA(){
    console.log("A is Done")
}

function additionB(){
    console.log("B is Done")
}

additionA()
additionB()


function additionC(){
    setTimeout(function(){
        console.log("C is done")
    },3000)
}
additionC()

function getinfo(){
    setTimeout(function(){
        console.log("user created")
    },1000)
    setTimeout(() => {
        console.log("get id")
    },2000);
    setTimeout(() => {
        console.log("get info")
    }, 3000);
}
getinfo()

//CAll BACK HELL//

function user(){
    setTimeout(() => {
        console.log("A"),
        setTimeout(() => {
            console.log("B"),
            setTimeout(() => {
                console.log("C")
            },1000)
        }, 2000);
    }, 3000);
}

user()

//PROMISE//

let n = new Promise(function (resolve, reject) {
    let a = 5
    let b = 5

    if (a == b) {
        resolve("Accepted")
    }
    else {
        reject("Decline")
    }
})

n.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})


let a = new Promise((resolve, reject) => {
    c = 4
    d = 5
    if (c == d){
        resolve("accepted")
    }
    else{
        reject("declined")
    }
})

a.then(function(str){
    console.log(str)
},function name(str){
    console.log(str)
})
