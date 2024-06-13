let students = [
    {

        firstName: "chinmay",
        lastName: "deshpande",
        age: 12,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        age: 23,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
   {
    firstName: "mayuri",
        lastName: "rao",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"

    }
]

//PRINT NAME OF ALL STUDENT
console.log(students[1].firstName)
for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName)
}

//STUDENT WHO LIVE IN PUNE CITY

for(i = 0; i < students.length ; i++){
    if (students[i].city === "pune")
    console.log(students[i].firstName, students[i].city)
}

// STUDENT IN PUNE AND ABOVE 35

for(let i=0 ; i<students.length ; i++){
    if (students[i].age > 28 && students[i].city === 'pune'){
        console.log(students[i].firstName+students[i].lastName)
    }
    
}

// NAME & NO OF SKILLS


for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName+ " = "+students[i].skills.length)
}


// ADD ANY SKILL TO STUDENTS

for (let i =0 ; i < students.length ; i++){
    students[i].skills.push("SQL")
    console.log(students[i])
}



// AVERAGE AGE OF ALL STUDENTS
let a1 = students.reduce(function(acc,el){
    return el.age + acc
},0)
console.log(a1/students.length)
