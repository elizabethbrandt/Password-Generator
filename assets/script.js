// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array list of numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Array list of lowercase letters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l",
  "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array list of uppercase letters
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K",
  "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array list of special characters
var special = [" ","!","#","$","%","^","&","*","(",")","'",
  "+",",","-",".","/",":",";","<",">","=","?","@","[","|","]",
  "_","`","{","}","~"];

// Create generatePassword function
function generatePassword() {

  // Prompt for how many characters (at least 8, no more than 128)
  var passwordLength = prompt("How many characters would you like your password to be?");

    // Alerts user if their length does not meet criteria and forces them to start again
    while (passwordLength < 8 || passwordLength > 128) {
      alert("Your password must be between 8 and 128 characters in length.");
      var passwordLength = prompt("How many characters would you like your password to be?");
    }

  // DECLARE a new list of `charactersToUse`
  var charactersToUse = [];

  // DECLARE new `password` string
  var password = "";

  // Confirm for special characters
  var isUsingSpecial = confirm("Click 'OK' if you would like your password to contain special characters.");

    // IF user confirms they're using special characters
    if (isUsingSpecial) {
      // THEN push `special` into `charactersToUse` list
      charactersToUse = charactersToUse.concat(special);
      // Generate random character from `special` list
      var randomSpecial = special[Math.floor(Math.random() * special.length)];
      // AND APPEND selected character to the `password`
      password += randomSpecial;
    }

  // Confirm for numeric
  var isUsingNumbers = confirm("Click 'OK' if you would like your password to contain numeric characters.");

    // IF user confirms they're using numbers
    if (isUsingNumbers) {
      // THEN push `numbers` into `charactersToUse` list
      charactersToUse = charactersToUse.concat(numbers);
      // Generate random character from `numbers` list
      var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      // AND APPEND selected character to the `password`
      password += randomNumber;
    }

  // Confirm for lower case
  var isUsingLowercase = confirm("Click 'OK' if you would like your password to contain lowercase letters.");

    // IF user confirms they're using lowercase letters
    if (isUsingLowercase) {
      // THEN push `lowercase` into `charactersToUse` list
      charactersToUse = charactersToUse.concat(lowercase);
      // Generate random character from `lowercase` list
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      // AND APPEND selected character to the `password`
      password += randomLowercase;
    }

  // Confirm for upper case
  var isUsingUppercase = confirm("Click 'OK' if you would like your password to contain UPPERCASE letters.");

    // IF user confirms they're using uppercase letters
    if (isUsingUppercase) {
      // THEN push `uppercase` into `charactersToUse` list
      charactersToUse = charactersToUse.concat(uppercase);
      // Generate random character from `special` list
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      // AND APPEND selected character to the `password`
      password += randomUppercase;
    }

  // IF NOT `charactersToUse.length`
  if (!charactersToUse.length) {
    // THEN ALERT user that they need to pick at least one option
    alert("You must select at least one option");
    // AND EXIT function
    return;
  }

  // Create while loop to check arrays
  while (password.length < passwordLength) {

    // SELECT `randomCharacter` from `charactersToUse`
    var randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    // APPEND `randomCharacter` to `password` string
    password += randomCharacter;

  }

  // RETURN `password`
  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);