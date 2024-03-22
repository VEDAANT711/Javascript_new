let info2 = {
    firstName:"vedant",
    lastName:"gaikwad",
    age:"23"
}

for (let key in info2){
    console.log(key)
}


let roles =new Map()
console.log(roles)

roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"customer")
roles.set(4,"employee")

console.log(roles.get(1))
console.log(roles.get(2))
console.log(roles.get(3))
console.log(roles.get(4))

let skills= ["python","javascript","html","css"]
let info = {firstName:"vedant",lastName:"gaikwad"}
let canDrive = true


let names = new Map(
    [
        [skills,4],
        [info,2],
        [canDrive,"yes"],
        [1,"rollNo"],
        ["fullName","vedant gaikwad"]
    ]
)
console.log(names)
names.get(1)
names.get(skills)


let x = names.has(info2)
console.log(x)


let roles2 = new Map(
    [

        [1,'admin'],
        [2,'manage'],
        [3,'customer'],
        [4,'employee']
    ]
)


roles2.forEach(function(val,key){
    console.log(typeof val,typeof key)
})














