
// //SYNC//
// function additionA(){
//     console.log("A")
// }

// function additonB(){
//     console.log("B")
// }
// additionA()
// additonB()

// //ASYNC//
// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },2345)

// }

// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()


// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get id")
//     },2000);

//     setTimeout(function(){
//         console.log("user info")
//     },1000)
// }
// getInfo()


//Call BACK HELL//


// function getinfo() {
//     setTimeout(function(){
//         console.log("User Created")
//         setTimeout(function(){
//             console.log("Get Id")
//             setTimeout(function(){
//                 console.log("User Info")
//             },1000)
//         },2000)
//     },3000)
// }


//PROMISES//

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 10

    if(a == b){
        resolve("HELLO!")
    }
    else{
        reject("BYE!")
    }
})
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})