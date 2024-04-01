class Student{
    firstname = "vedant";
    lastname = "gaikwad";
    adharNo = 123;

    displayname(){
        console.log(this.firstname + this.lastname)
    }
}


class Teacher{
    firstname = "vedant";
    lastname = "gaikwad";
    adharNo = 123;
    salary = 100000

    displaysalary(){
        console.log(this.salary)
    }

}
let a = new Teacher()
console.log(a.firstname)
console.log(a.salary)



class Tata{
    firstname = "vedant";
    lastname = "gaikwad";
    adharNo = 123;
}

class Harrier extends Tata{

    salary = 1000

    displaysalary(){
    console.log(this.salary)
   } 
}

let b=new Tata
b.displaysalary() 
