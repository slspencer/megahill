// Assignment code here

// set debug
var debug=false;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//-----------------
function getYN(promptStr) {
  if (debug) {
    console.log('got to YN');   
  } 
  let ans="";
  while (((ans !== 'Y') || (ans !== 'y')) || ((ans !== 'N') || (ans !== 'n'))) {
    if (debug) {
      console.log(promptStr, ans)
    }
    ans = prompt(promptStr);
    if (((ans === 'Y') || (ans === 'y')) || ((ans === 'N') || (ans === 'n'))) {
      break;
      //* don't know why the while wasn't catching these values, had to put in a forced break
    }
  }
  return ans;
}
//------------------
// Get length of password
function getLength() {
  if (debug) {
    console.log("got to C");  
  }
  //bw 8 & 128 chars
  var len="0";
  while ((Number(len) <= 8) || (Number(len) >= 128)) { // Cancel button returns null
    len = prompt('Enter the password length, between 8 and 128:');
  }
  if (debug) {
    console.log('Password length will be ' + len);
  }
  return Number(len);
}
//------------------
// Get if lowercase
function getLowercase() {
  if (debug) {
    console.log("got to D");  
  }
  var promptStr="Do you want to include lower case characters? (Y/N)";
  var lcase=getYN(promptStr);
  if (debug) {
    console.log(promptStr, lcase);
  }
  return lcase;
}
//------------------
// Get if uppercase
function getUppercase() {
  if (debug) {
    console.log("got to E");  
  }
  var promptStr="Do you want to include upper case characters? (Y/N)";
  var ucase=getYN(promptStr);
  return ucase;
}
//------------------
// Get if numeric
function getNumeric() {
  if (debug) {
    console.log("got to F");  
  }
  var promptStr="Do you want to include numeric characters? (Y/N)";
  var num=getYN(promptStr);
  return num;
}
//--------------------
// Get if special
function getSpecial () {
  if (debug) {
    console.log("got to G"); 
  }
  var promptStr="Do you want to include special characters? (Y/N)";
  var spec=getYN(promptStr);
  return spec;
}
//--------------------
// Random string generator
function randomString (len, charStr) {
  if (debug) {
    console.log("got to H");  
  }
  var password=""; 
  var charLen = charStr.length;
  for (var i = 0; i < len; i++) {
    /* build the password one character at a time*/
    /* by grabbing a random character from charStr then concat it to password */
    /* attribution to https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/15530287 */
    password += charStr.charAt(Math.floor(Math.random() * charLen)); 
    if (debug) {
      console.log(password);
    }
  }
  return password;
}

//------------------
// Generate password
function generatePassword() {
  if (debug) {
    console.log("got to B");    
  }
  var password="";
  var charStr="";
  var len=getLength();
  var lcase=getLowercase();
  var ucase=getUppercase();
  var num=getNumeric();
  var spec=getSpecial();
  
  // get the user preferences
  if (lcase==="Y" || lcase==="y") {
    charStr = charStr + "abcdefghijklmnopqrstuvwxyz";
  }
  if (ucase==="Y" || ucase==="y") {
    charStr = charStr + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (num==="Y" || num==="y") {
    charStr = charStr + "0123456789";
  }
  if (spec==="Y" || spec==="y") {
    charStr = charStr + "~!@#$%^&*()_-+={[}]|;<,>.?";
  }
  if (debug) {
    console.log(charStr);
  }

  // create & return the password
  password = randomString(len, charStr);
  
  return password;
}
//------------------
// Get the password & write it to the #password input
function writePassword() {
  if (debug) {
    console.log("got to A");
  }

  //get the password
  var password = generatePassword();
  if (debug) {
    console.log("got to I"); 
  }

  //assign a variable to the DOM element #password
  var passwordText = document.querySelector("#password");

  //store the password in the variable, which is displayed in the browser
  passwordText.value = password;
}
//----------------------
// Main  - kicks off when user clicks on the button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

