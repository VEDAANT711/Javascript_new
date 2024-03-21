
//program1
let tagName = document.querySelector('h1')
let idName = document.querySelector('#one')
let idName2  = document.getElementById('one')
console.log(idName)
console.log(idName2)


let liLists = document.querySelectorAll('li')
console.log(liLists)
let liLists2 =  document.getElementsByTagName('li')
console.log(liLists2)



let className = document.querySelectorAll('.fruits')
console.log(className)
let className2  = document.getElementsByClassName('fruits')
console.log(className2)


let byAttr = document.querySelectorAll('li[name= "nm"]')
console.log(byAttr)
let byAttr2 = document.getElementsByName('nm')
console.log(byAttr2)