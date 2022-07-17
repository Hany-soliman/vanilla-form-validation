import {form, name, phone, email, website, password, confirmPassword} from './utils/targetedElements.js'
import {isValidName} from "./utils/nameValidation.js";
import { deleteInputErrorMessage} from "./utils/inputErrorHandling.js";
import {isValidPhoneNumber} from "./utils/phoneNumberValidation.js";
import {isValidEmailAddress} from "./utils/emailAddressValidation.js";
import {isValidURL} from "./utils/urlValidation.js";
import {isValidPassword, isMatchingPassword} from "./utils/passwordValidation.js";
import {formHandling} from "./utils/formHandling.js";


//EventListeners
form.addEventListener('submit', formHandling)
name.addEventListener('blur', isValidName)
name.addEventListener('focus', ()=>{
    deleteInputErrorMessage(name)
})
phone.addEventListener('blur', isValidPhoneNumber)
phone.addEventListener('focus', ()=>{
    deleteInputErrorMessage(phone)
})
email.addEventListener('blur', isValidEmailAddress)
email.addEventListener('focus', ()=>{
    deleteInputErrorMessage(email)
})
website.addEventListener('blur', isValidURL)
website.addEventListener('focus', ()=>{
    deleteInputErrorMessage(website)
})
password.addEventListener('blur', isValidPassword)
password.addEventListener('focus', ()=>{
    deleteInputErrorMessage(password)
})
confirmPassword.addEventListener('blur', isMatchingPassword)
confirmPassword.addEventListener('focus', ()=>{
    deleteInputErrorMessage(confirmPassword)
})