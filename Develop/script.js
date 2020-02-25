// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", displayPasswordParameters);




/* In order to have the button in the html run the javascript function, the js does the following:
1. On load, finds the generate button by using var generateBtn = document.querySelector("#generate");
2. Then it uses the var generateBtn to add an event listener -- generateBtn.addEventListener("click", writePassword);
3. "Click is the event -- which is a standard set of events see https://www.w3schools.com/jsref/dom_obj_event.asp"
4. WritePassword is simply the function that we write that when the event is triggered, runs. 
*/

// Write password to the #password input
function displayPasswordParameters() 
{
  var selectedPasswordLength = prompt("Enter password length. Password length must be between 8 and 128 characters.");
  var password = "";
  alert("Select if you would like uppercase letters, lowercase letters, numbers and/or special characters in your password");
  var upperCase = confirm("Do you want uppercase letters in your password?");
  var lowerCase = confirm("Do you want lower case letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?")
    if (upperCase !== true && lowerCase !== true && numbers !== true && specialCharacters !== true){
      alert("You must choose at least one variable to include?");
      password = "Incorrect Input";      
    }
      else{
        password = generatePassword(selectedPasswordLength,upperCase,lowerCase, specialCharacters,numbers);
      }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function randomNumberGenerator(lowerBound, upperBound) {
  return Math.floor(Math.random()*(upperBound-lowerBound+1)+lowerBound);
}


function generatePassword(passwordLength, upperCase, lowerCase, specialCharacters, numbers) {
  var passwordText = "";
  var currentPasswordLength = 0;
  while (currentPasswordLength < passwordLength) {
    if ((upperCase === true) && (currentPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(randomNumberGenerator(65,90));
      currentPasswordLength++;
    }
    if ((lowerCase === true) && (currentPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(randomNumberGenerator(98,122));
      currentPasswordLength++;
    }
    if ((specialCharacters === true) && (currentPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(randomNumberGenerator(33,47));
      currentPasswordLength++;
    }
    if ((numbers === true) && (currentPasswordLength < passwordLength)) {
      passwordText = passwordText + randomNumberGenerator(0,9);
      currentPasswordLength++;
    }
    
    
  }
  return passwordText;
}

/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
Edit html to use jscript function called "WritePassword();"
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected



WHEN all prompts are answered


THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

