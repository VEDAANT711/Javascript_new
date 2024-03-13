

let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text 


    createButton("Remove",'remove',newLi)
    createButton("Up",'up',newLi)
    createButton("Down",'down',newLi)

    ulList.appendChild(newLi)
    inputText.value = ''
})


 function createButton(textContent,className,Li){
    let newButton = document.createElement('button')
    newButton.textContent = textContent  
    newButton.classList.add(className)
    Li.appendChild(newButton)
 }














