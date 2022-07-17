import {
    confirmPassword,
    email,
    form,
    message,
    messageContainer,
    name,
    password,
    phone,
    website
} from "./targetedElements.js";
import {isValidName} from "./nameValidation.js";
import {isValidPhoneNumber} from "./phoneNumberValidation.js";
import {isValidEmailAddress} from "./emailAddressValidation.js";
import {isValidURL} from "./urlValidation.js";
import {isMatchingPassword, isValidPassword} from "./passwordValidation.js";
import {deleteInputErrorMessage} from "./inputErrorHandling.js";

const formHandling = (e)=>{
    e.preventDefault()
    deleteHints()
    if(!form.checkValidity()){
        validateAllFields()
        messageContainer.style.borderColor = 'red'
        message.textContent = 'Please check all fields.'
        message.style.color = 'red'
    } else {
        messageContainer.style.borderColor = 'green'
        message.textContent = 'Successfully Registered!'
        message.style.color = 'green'
        storeFormData()
    }
}

const deleteHints = ()=>{
    deleteInputErrorMessage(name)
    deleteInputErrorMessage(phone)
    deleteInputErrorMessage(email)
    deleteInputErrorMessage(website)
    deleteInputErrorMessage(password)
    deleteInputErrorMessage(confirmPassword)
}

const validateAllFields = ()=>{
    isValidName()
    isValidPhoneNumber()
    isValidEmailAddress()
    isValidURL()
    isValidPassword()
    isMatchingPassword()

}

const storeFormData = ()=>{
    let user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    localStorage.setItem('userData', JSON.stringify(user))
}
export {formHandling}