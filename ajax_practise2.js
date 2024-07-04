let a1 = new Promise((resolve, reject) => {
    let cities = ['nagpur','pune','goa','pondicherry']
    if(cities.includes('goa')){
        resolve([11,22,33])
    }
    else{
        reject([-11,-22,-33])
    }
})

a1.then((a)=>{
    console.log(a[0])
})
a1.catch((b)=>{
    console.log(b[0])
})



let b1 =  new Promise((resolve, reject) => {
    let a = [11,22,33]
    if(a.includes(33)){
        resolve("hie")
    }
    else{
        reject("bye")
    }
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

b1.then((str1) =>{
    console.log(str1)
})

b1.catch((str2)=>{
    console.log(str2)
})

b1.finally(()=>{
    console.log("i will execute")
})














