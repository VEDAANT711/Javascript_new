// function Bank(){
//     setTimeout(() => {
//         console.log("Login"),
//         setTimeout(() => {
//             console.log("Enter Details"),
//             setTimeout(() => {
//                 console.log("Balance=1000000")
//             },1000);
//         },2000);
//     },3000);
// }
// Bank()


function UserCreated(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user created")
        },3000);
    })
}

function getID(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("get ID")
        },2000);
    })
}

function getInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("get Info")
        },1000);
    })
}

UserCreated()
.then((str)=>{
    console.log(str)
    return getID()
})
.then((str)=>{
    console.log(str)
    return getInfo()
})
.then((str)=>{
    console.log(str
    )
})

















