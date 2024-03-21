
let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newLi  = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Papaya</li>

    createButton("Remove",'remove',newLi)
    createButton("Up",'up',newLi)
    createButton("Down",'down',newLi)

    //CreateButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ''

})

function createButton(textContent, className ,li){
    let newButton = document.createElement('button')
    newButton.textContent = textContent
    newButton.classList.add(className)
    li.appendChild(newButton)
}

