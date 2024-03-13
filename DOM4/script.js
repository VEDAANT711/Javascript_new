let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')


headOne.addEventListener('click',function(){
    headOne.style.color = "green"
})


buttonOne.addEventListener('click',function(){
    headOne.style.color = "purple"
})


buttonOne.addEventListener('click',function(){
   let colorText =  inputText.value
   headOne.style.color = colorText
   inputText.value= ""
})