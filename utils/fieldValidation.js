import {createInputErrorMessage} from "./inputErrorHandling.js";

const isValidValue = (target, regexExp, errMessage1, errMessage2)=>{
    let fieldValue = target.value.trim()
    const regex = new RegExp(regexExp)
    if(!fieldValue){
        createInputErrorMessage(target,errMessage1)
        target.style.borderColor = 'red'
    } if(fieldValue && !regex.test(fieldValue)){
        createInputErrorMessage(target,errMessage2)
        target.style.borderColor = 'red'
    } if(fieldValue && regex.test(fieldValue)){
        target.style.borderColor = 'green'
    }
}

export {isValidValue}