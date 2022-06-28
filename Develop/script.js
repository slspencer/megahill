// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//------------------
// Get length of password
function getLength() {
  len=0;
  //get user input
  return len;
}
//------------------
// Get if lowercase
function getLowercase() {
  lcase=false;
  //get user input
  return lcase;
}
//------------------
// Get if uppercase
function getUppercase() {
    ucase=false;
    //get user input

    return ucase;
}
//------------------
// Get if numeric
function getNumeric() {
    num=false;
    //get user input

    return num;
}
//--------------------
// Get if special
function getSpecial () {
    spec=false;
    // get user input

    return spec;
}
//--------------------
// Random string generator
function randomString (len, charStr) {
  for (var i = 0; i <= len; i++) {
    var randomNumber = Math.floor(Math.random() * charStr.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password;
}

//------------------
// Generate password
function generatePassword() {
  var password=""
  var charStr=""
  var len=getLength();
  var lcase=getLowercase();
  var ucase=getUppercase();
  var num=getNumeric();
  var spec=getSpecial();
  
  // get the user preferences
  if lcase {
    charStr = charStr + "abcdefghijklmnopqrstuvwxyz"
  }
  if ucase {
    charStr = charStr + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if num {
    charStr = charStr + "0123456789"
  }
  if spec {
    charStr = charStr + "~!@#$%^&*()_-+={[}]|;<,>.?"
  }

  // create & return the password
  password = randomString(len, charStr);
  
  return password;
}
//------------------
// Get the password & write it to the #password input
function writePassword() {
  //get the password
  var password = generatePassword();

  //assign a variable to the DOM element #password
  var passwordText = document.querySelector("#password");

  //store the password in the variable, which is displayed in the browser
  passwordText.value = password;
}
//----------------------
// Main  - kicks off when user clicks on the button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
