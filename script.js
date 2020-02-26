// Assignment Code
var generateBtn = document.querySelector("#generate");

// Event listener to generate button. When we click button writePassword function executes
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var selectedPasswordLength = prompt("Enter a password length between 8 and 128 characters.");
    if (selectedPasswordLength < 8 ){
        alert("Your password is too short. Try again with a password length between 8 and 128 characters.");
        return;
        
        
    }
      else if (selectedPasswordLength > 128){
        alert("Your password is too long. Try again with a password length between 8 and 128 characters.");
        return;
        
      }

  
  var password = "";
  alert("Select if you would like uppercase letters, lowercase letters, numbers and/or special characters in your password. You must select at least one variable.");
  var upperCase = confirm("Do you want uppercase letters in your password?");
  var lowerCase = confirm("Do you want lower case letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?")
    if (upperCase === false && lowerCase === false && numbers === false && specialCharacters === false){
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

