let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')

console.log('ulList')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    ulList.appendChild(newLi)
    inputText.value = " "

})




