const createInputErrorMessage = (target, inputMessage)=>{
    const inputErrorMessage = document.createElement('div')
    inputErrorMessage.textContent = inputMessage
    inputErrorMessage.classList.add('Input-error')
    target.parentElement.appendChild(inputErrorMessage)
    target.setCustomValidity("Invalid field.")
}

const deleteInputErrorMessage = (target)=>{
    const inputMessages =  target.parentElement.querySelectorAll('.Input-error')
    if(inputMessages.length > 0){
        target.parentElement.removeChild(...inputMessages)
        target.setCustomValidity("")
    }
}

export {createInputErrorMessage, deleteInputErrorMessage}