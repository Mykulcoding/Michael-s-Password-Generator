//PSEUDOCODE

// Prompt for Password Length
// Ask user for password.
// Validate the input to ensure its a number and within a specific range (between 8 and 128 characters).
// If the input is invalid, display an alert and return null.
// Prompt for Character Types
// Ask user whether to include special, numeric, lowercase, and uppercase characters.
// Store user choices as booleans (true or false).
// Validate Selection of at Least One Character Type
// Check if at least one character type is selected.
// If not, display an alert and return null.
// Create an object containing the selected options (length, special characters, etc).
// Return password Options.
// Generate and get paswword
// If options are invalid, return nothing.



// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of the password:"));

  // To validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }

  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  // To validate that at least one character type is selected
  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("At least one character type must be selected.");
    return null;
  }

  var passwordOptions = {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };

  return passwordOptions;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return ""; // Return an empty string if options are invalid

  var selectedCharacters = [];
  var guaranteedCharacters = [];

  if (options.includeSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.includeNumeric) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.includeLowercase) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.includeUppercase) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  var generatedPassword = guaranteedCharacters.join('');
  for (var i = generatedPassword.length; i < options.length; i++) {
    generatedPassword += getRandom(selectedCharacters);
  }

  return generatedPassword;
}

// Get reference to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  alert("Generated Password: " + password); // Displaying password in an alert
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
