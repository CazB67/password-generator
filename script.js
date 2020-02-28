//Finds node with the id generate. 
var generateBtn = document.querySelector("#generate");



// Event listener to generate button. When we click button writePassword function executes
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input that appears in box
function writePassword() {
  //Create variable so password is shown in the text area
  var passwordText = document.querySelector("#password");
  //Password conditions
  var selectedPasswordLength = prompt("Enter a password length between 8 and 128 characters.");
    if (selectedPasswordLength < 8 ){
      alert("Incorrect input. Try again with a password length between 8 and 128 characters.");
        //function goes back to event listener
        return;

    }
      else if (selectedPasswordLength > 128){
        alert("Incorrect input. Try again with a password length between 8 and 128 characters.");
        //function goes back to event listener
        return;
      }
      
  alert("Select if you would like uppercase letters, lowercase letters, numbers and/or special characters in your password. You must select at least one variable.");
  var upperCase = confirm("Do you want uppercase letters in your password?");
  var lowerCase = confirm("Do you want lower case letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?")
  if (upperCase === false && lowerCase === false && numbers === false && specialCharacters === false)
  {
      alert("You must choose at least one variable to include."); 
      passwordText.value="Incorrect Input";

  }
      //If all password conditions are satisfied we can move on to next function and generate the password
  else
  {
    passwordText.value = "";
    passwordText.value = generatePassword(selectedPasswordLength,upperCase,lowerCase, specialCharacters,numbers);  
  }
}

//Generate password with arguments
function generatePassword(passwordLength, upperCase, lowerCase, specialCharacters, numbers) {
  var passwordText = "";
  var currentPasswordLength = 0;
  //Keeps going until condition becomes true. CharCode assigns number values to characters on keyboard keys.
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
  //returns value
  return passwordText;
}

//random function passing charcode assigned charactors
function randomNumberGenerator(lowerBound, upperBound) {
  //returns the random number
  return Math.floor(Math.random()*(upperBound-lowerBound+1)+lowerBound);
}

