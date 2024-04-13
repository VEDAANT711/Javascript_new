//Promise Combinators//

//Promise.allSettled()//
//Promise.all()//
//Promise.race()//
//promise.any()//

// Promise.all([
//    Promise.resolve("hello"),
//    Promise.resolve("bye"),
//    Promise.resolve("Chalo")
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// Promise.allSettled([
//     Promise.resolve("hie"),
//     Promise.resolve("Bye"),
//     Promise.resolve("chaalo"),
//     Promise.reject("ryuwihiu")

// ])
// .then(function(str){
//     console.log(str)
// })

// function P1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             reject('hello')
//         },1000)
//     })

// }

// function P2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve("hieee")
//         }, 2000);
//     })
// }

// Promise.race([
//     P1(),
//     P2()   
// ])
// .then (function(str){
//     console.log(str)
// })

// .catch(function(str){
//     console.log(str)
// })


// Promise.any([
//     Promise.reject('hie'),
//     Promise.reject('go'),
//     Promise.reject('bye'),
//     Promise.resolve('chaloo')
// ])
// .then(function(str){
//     console.log(str)
// })


