// //Promise Combinators//
// function Hello(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Hie")
//         },3000)
//     })
// }

// function Namastey(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('Namahsahkar')
//         },2000);
    
//     })
// }

// function SalamWaleykum(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('Adaab')
//         },1000)
//     })    
// }

// // Hello()
// // .then(function(str){
// //     console.log(str)
// //     return Namastey()
// // })

// // .then(function(str){
// //     console.log(str)
// //     return SalamWaleykum()
// // })
// // .then(function(str){
// //     console.log(str)
// // })


// // async function Hello1() {
// //     let a = await Hello()
// //     console.log(a)
// //     let b = await Namastey()
// //     console.log(b)
// //     let c = await SalamWaleykum()
// //     console.log(c)
// // }
// // Hello1()

// Promise.all([
//     Promise.resolve("AA"),
//     Promise.resolve("BB"),
//     Promise.resolve("CC")
// ])
// .then(function(arr){
//     console.log(arr)
// })

// Promise.allSettled([
//     Promise.resolve("AA"),
//     Promise.resolve("BB"),
//     Promise.reject("CC")
// ])
// .then(function(arr){
//     console.log(arr)
// })

// function pro1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("GGGGG")
//         },3000)
//     })
// }

// function pro2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("IIII")
//         },2000)
//     })
// }

// Promise.race([
//     pro1(),
//     pro2()
// ])

// .then(function(arr){
//     console.log(arr)
// })

// .catch(function(arr){
//     console.log(arr)
// })

// Promise.any([
//     Promise.reject("bye"),
//     Promise.reject("bye2"),
//     Promise.reject("bye3")
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .then(function(arr){
//     console.log(arr)
// })
// .then(function(arr){
//     console.log(arr)
// })




