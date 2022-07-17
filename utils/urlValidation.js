import {website} from "./targetedElements.js";
import {isValidValue} from "./fieldValidation.js";

const isValidURL = ()=> isValidValue(website, 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)', 'Please enter an input.', 'Please enter a valid URL. Expected format "https://domain.com"')

export {isValidURL}