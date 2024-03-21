let names = ["vedu","siddhu","tannu"]

let a = names[0]
let b = names[1]
let c = names[2]

console.log(a,b,c)

let [a1,b1,c1] = names
console.log(a1,b1,c1)

let lang = ["python","c#","java"]
let [q1,q2,q3] = lang

console.log(q1,q2,q3)




let city = [["ngp","pune"],["bhopal","indr"],["bengaluru","bidar"]]

let [[c11,c22],[c33,c44],[c55,c66]] = city
console.log(c11,c55,c33,c66)



let info ={
    firtName:"vedant",
    lastName:"gaikwad"
}

let {firtName,lastName} = info
console.log(firtName,lastName)


var vehicle = {
    engine:"v12",
    hp:"3500"
}

let {engine:e,hp:H} = vehicle
console.log(e,H)



let info2 = {
    fullName:"Vedant Gaikwad",
    parent:{
        mother:"Varsha",
        father:"Shashikant"
    }
}

let {fullName:fn,parent:{mother,father}} = info2
console.log(fn,mother,father)

let info3 = {
    firstName:"vedant",
    lastName:"gaikwad",
    skills:["python","javascript"]

}

let {firstName:f3,lastName:l3,skills:[sub1,sub2]}  = info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)