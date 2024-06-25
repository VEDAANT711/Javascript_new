let addButton = document.querySelector('#addButton')
let inputElement = document.querySelector('input')
let ulList  = document.querySelector('ul')

addButton.addEventListener('click',function(){
    let text = inputElement.value 
    let newLi = document.createElement('li')
    newLi.textContent = text 
    ulList.appendChild(newLi)
    createButton(newLi)
    inputElement.value = ""

})

function createButton(li){
    let rm= document.createElement('button') 
    rm.classList.add('remove') 
    rm.textContent = "Remove" 
    li.appendChild
 
    let up = document.createElement('button')
    up.classList.add('up') 
    up.textContent = "Up"
    li.appendChild(up)

    let down= document.createElement('button') 
    down.classList.add('down') 
    down.textContent = "Down" 
    li.appendChild

}