let info = {
    FirstName : "Vedant",
    LastName : "Gaikwad",
    age : 23,
    rollno : 74,
    skills :["js","python","sql","cypress"]
}
 

// //Dot Notation
// console.log(info.FirstName)
// //Bracket Notation
// console.log(info['FirstName'])

// info.LastName = "dani"
// info['LastName']="dani"
// console.log(info)

// info.city = "pune"
// info['city']="pune"
// console.log(info)


//delete info.skills[0]
info['skills'].splice(0,1)
console.log(info)


let N = ["salman","sharukh","virat","hritik"]
for (let i=0 ; i < N.length; i++);
console.log(N)




let ved = {
    Firstname : "vedu",
    Lastname  : "gaikwad",
    BMI : 22.7,
    Weight : 75.6
}
for (let x in ved){
    console.log(x,ved[x])
}





let Cricketers = [

    {
        firstName:"Virat",
        lastName:"Kohli",
        age:36
    },
    {
        firstName:"Rohit",
        lastName:"Sharma",
        age:37
    },
    {
        firstName:"M.S",
        lastName:"Dhoni",
        age:42

    }

]
console.log(Cricketers[0].firstName)




















