
let headOne = document.querySelector('#one')
console.log(headOne)
let byId2 = document.getElementById('one')
console.log(byId2)

console.log(typeof headOne)
console.log(typeof byId2)


let firstElement = document.querySelector('li')
console.log(firstElement)

let liELements = document.querySelectorAll('li')
console.log(liELements)

let buttonOne = document.querySelector('button')


buttonOne.addEventListener('click', function () {
    for (let i = 0; i < liELements.length; i++) {
        // console.log(i)
        // console.log(liELements[i].textContent)
        liELements[i].textContent = liELements[i].textContent.toUpperCase()
        if (i % 2 == 0) {
            liELements[i].style.color = "green"
        }
        else {
            liELements[i].style.color = "red"
        }
    }
})

let liElement = document.getElementsByTagName("li")
console.log(liElement)
let liElement2 = document.querySelectorAll("li")
console.log(liElement2)


let className  = document.querySelectorAll('.fruits')
let className2 = document.getElementsByClassName('fruits')
console.log(className)
console.log(className2)

let name1 = document.querySelectorAll('li[name= "fr"]')
let name2 = document.getElementsByName('fr')

console.log(name1)
console.log(name2)





























