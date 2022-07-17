import {phone} from "./targetedElements.js";
import {isValidValue} from "./fieldValidation.js";

const isValidPhoneNumber = () => isValidValue(phone, '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$', 'Please enter a phone number.', 'Please enter a valid phone number')

export {isValidPhoneNumber}