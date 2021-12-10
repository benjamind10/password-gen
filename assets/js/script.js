// Universal Variables
var len = 0;
var params = [];
var alpha = [
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
  'z',
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];
var pass = '';
var password = '';

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  len = checkLen();

  if (len > 8) {
    var upper = checkParams('Upper');
    params.push(upper);
    var lower = checkParams('Lower');
    params.push(lower);
    var lower = checkParams('Numbers');
    params.push(lower);
    var lower = checkParams('Symbols');
    params.push(lower);

    if (!upper && !lower && !num && !symb) {
      window.alert('You need to select at least 1');
      return;
    } else {
      //   generatePassword(len);
    }
  } else {
    return;
  }
});

function generatePassword() {
  return 'test';
}

// Check params fn`
function checkParams(param) {
  // Variable to check the current parameter
  if (param === 'Upper' || param === 'Lower') {
    var checked = window.confirm('Select OK to include ' + param + ' case');
  } else {
    var checked = window.confirm('Select OK to include ' + param);
  }
  if (checked) {
    return param;
  }
  return false;
}

// Check length fn
function checkLen() {
  // New variable to keep track of password lenght
  var len = window.prompt('Password length 8-128:');
  // Conditional check to see if lenght is valid
  if (len < 8) {
    window.alert('You need to provide a value greater than 8.');
    return false;
  }
  return len;
}
