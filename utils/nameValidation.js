import {name} from "./targetedElements.js";
import {isValidValue} from "./fieldValidation.js";

const isValidName = () => isValidValue(name, '^[a-zA-Z ]*$', 'Please enter an input.', 'This field doesn\'t accept numbers.')

export {isValidName}