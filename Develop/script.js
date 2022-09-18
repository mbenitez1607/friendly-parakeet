// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword () {
    var passwdLength;
    var lowCase, upCase, num, specialChar;
    var chars = "", tempPasswd = "";

    // Ask user for password length. Must be between 8 - 128 characters
    do  {
      passwdLength = prompt("Enter password length (between 8 - 128 characters): ", 8);
    } while ((passwdLength < 8) || (passwdLength > 128));
    // Ask user what characters to include in the password: lowercase, uppercase, numbers,
    // and/or special characters.
    // User's selection input must be "y","Y",'n', or 'N' 
    do {
      do {
        lowCase = prompt("Include lowercase letters? y/n", "y");
      } while ((lowCase != "y") && (lowCase != "Y") && (lowCase != "n") && (lowCase != "N"));
      do {
        upCase = prompt("Include UPPERCASE letters? y/n", "y");
      } while ((upCase != "y") && (upCase != "Y") && (upCase != "n") && (upCase != "N"));
      do {
        num = prompt("Include numbers [0 - 9]? y/n", "y");
      } while ((num != "y") && (num != "Y") && (num != "n") && (num != "N"));
      do {
        specialChar = prompt("Include special characters? y/n", "y");
      } while ((specialChar != "y") && (specialChar != "Y") && (specialChar != "n") && (specialChar != "N"));
      if ((lowCase != "y") && (lowCase != "Y") && (upCase != "y") && (upCase != "Y") && (num != "y") && (num != "Y") && (specialChar != "y") && (specialChar != "Y")) {
        alert("You didn't select any character type to create the password. Restarting the process.");

      }
    // Repeat the questions until at least one character type has been selected
    } while ((lowCase != "y") && (lowCase != "Y") && (upCase != "y") && (upCase != "Y") && (num != "y") && (num != "Y") && (specialChar != "y") && (specialChar != "Y"));
    
    // Create string with available character types;
    if ((lowCase == "y") || (lowCase == "Y")) {
      chars = chars + "abcdefghijklmnopqrstuvwxyz";
    }
    if ((upCase == "y") || (upCase == "Y")) {
      chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if ((num == "y") || (num == "Y")) {
      chars = chars + "01234567890";
    }
    if ((specialChar == "y") || (specialChar == "Y")) {
      chars = chars + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    // Generate password based on user's input
    for (var i = 0; i <= passwdLength; i++){
      var randomnumber = Math.floor(Math.random() * chars.length);
      tempPasswd += chars.substring(randomnumber, randomnumber + 1);
    }
    return tempPasswd;
  } // end of generatePassword

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
