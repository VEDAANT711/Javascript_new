//tagname

let byTagName = document.querySelector('h1')
console.log(byTagName)

//id
let byid = document.querySelector('#one')
console.log(byid)

//class
let byclass = document.querySelector('.two')
console.log(byclass)

//byAttribute
let byAttribute = document.querySelector(h1[id='one'])
console.log(byAttribute)

byAttribute.addEventListener('click', function(){
    byAttribute.textContent = 'pink'
    byAttribute.style.color = 'red'
    byAttribute.style.backgroundColor = 'black'
})


















