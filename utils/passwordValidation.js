import {password, confirmPassword} from "./targetedElements.js";
import {isValidValue} from "./fieldValidation.js";
import {createInputErrorMessage} from "./inputErrorHandling.js";

const isValidPassword = ()=> isValidValue(password, '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$', 'Please enter a password.', 'The password must include at least 1 uppercase character, 1 lowercase character, and 1 number')

const isMatchingPassword = ()=>{
    if(!password.value && !confirmPassword.value){
        createInputErrorMessage(confirmPassword,'Please enter a password.')
        confirmPassword.style.borderColor = 'red'
    } if(!password.value && confirmPassword.value){
        createInputErrorMessage(confirmPassword,'Your password doesn\'t match.')
        confirmPassword.style.borderColor = 'red'
    } if(password.value && confirmPassword.value && password.value !== confirmPassword.value){
        createInputErrorMessage(confirmPassword,'Your password doesn\'t match.')
        confirmPassword.style.borderColor = 'red'
    }if(password.value && !confirmPassword.value){
        createInputErrorMessage(confirmPassword,'Please enter a matching password.')
        confirmPassword.style.borderColor = 'red'
    } if(password.value && confirmPassword.value && password.value === confirmPassword.value){
        confirmPassword.style.borderColor = 'green'
    }
}
export {isValidPassword, isMatchingPassword}