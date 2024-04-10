function additionA() {
    setTimeout(function(){
        console.log("hie")

    },3000)
}
 additionA()


// callback hell//

 function Bank(){
    setTimeout(function(create_user){
        console.log("user created")
        setTimeout(function(update_user){
            console.log("user updated")
            setTimeout(function(delete_user){
                console.log("user deleted")
            },3000)
        },2000)
    },1000)
}
Bank()


//PROMISES//


let P1  = new Promise(function(resolve,reject){
    var a = 10
    var b = 1
    if(a == b){
        resolve("Hello")
    }
    else{
        reject("BYE!")
    }
})

P1.then(function(str){
    console.log(str)
}, function(str){
    console.log(str)
})


let P2  =  new Promise(function(resolve,reject){
    let cities = ["pune","mumbai","goa","chennai"]
    if(cities.includes("pune")){
        resolve([11,22,33])
    }
    else{
        reject([-11,-22,-33])
    }
})

P2.then(function(a){
    console.log(a[0])
})
P2.catch(function(b){
    console.log(b[0])
})



let P3 = new Promise(function(resolve,reject){
    let a = [11,22,33]
    if(a.includes(31)){
        resolve("hie")    
    }
    else{
        reject("bye")
    }
})
P3.then (function(str1){
    console.log(str1)
})

P3.catch(function(str2){
    console.log(str2)
})

P3.finally(function(){
    console.log("WILL EXECUTE ANYWAYS")
})



let P4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if (a == b){
        resolve("hello")
    }
    else{
        reject("bye!!")
    }
})

P4.then(function(str){
    console.log(str)
    return "hello2"
})
.then(function(str2){
    console.log(str2)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("ALWAYS EXECUTE")
})