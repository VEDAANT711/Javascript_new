//sync//
// function Add(){
//     setTimeout(function(){
//         console.log("hello")
//     },1000)
// }
// Add()

//Async//

// function Bank(){
//     setTimeout(function(){
//         console.log("Login")
//     },3000);
//     setTimeout(function(){
//         console.log("Enter Details")
//     },2000);
//     setTimeout(function(){
//         console.log("Balance 50,000")
//     },1000);
// }
// Bank()

// function User(){
//     setTimeout(function(){
//         console.log("Enter Details")
//     },2000)
// }

// function DisplayDetails(){
//     setTimeout(function(){
//         console.log("Balance 50,000")
//     },1000)
// }



// function Bank(){
//     setTimeout(function(){
//         console.log("Login")
//         setTimeout(function(){
//             console.log("Enter Details")
//             setTimeout(function(){
//                 console.log("Balance 50,000")
//             },3000);
//         },2000);
//     },3000)
// } 
// Bank()

// let  P = new Promise(function(resolve,resolve){
//     a = 10
//     b = 1
//     if (a == b){
//         resolve("hello")   
//     }
//     else{
//         resolve("bye")
//     }
// })
// P
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("will always execute")
// })


function UserCreated(){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
        resolve("user created")
        },3000)
        
    })
}
function GetId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get id')
        },2000)
    })

}
function GetInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("get info")
        },1000);

    })
}

// UserCreated()
// .then(function(str){
//     console.log(str)
//     return GetId()
// })

// .then(function(str){
//     console.log(str)
//     return GetInfo()
// })

// .then(function(str){
//     console.log(str)
// })



async function GetUserInfo(){
    let a = await UserCreated()
    console.log(a)
    let b = await GetId()
    console.log(b)
    let c = await GetInfo()
    console.log(c)
}

GetUserInfo()