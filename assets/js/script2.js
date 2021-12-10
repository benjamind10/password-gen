// Assignment Code
var generateBtn = document.querySelector('#generate');
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword(len);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  len = checkLen();

  if (len > 8) {
    var upper = checkParams('Upper case');
    params.push(upper);
    var lower = checkParams('Lower case');
    params.push(lower);
    var num = checkParams('Numeric value');
    params.push(num);
    var symb = checkParams('Symbol');
    params.push(symb);
    if (!upper && !lower && !num && !symb) {
      window.alert('You need to select at least 1');
      return;
    } else {
      generatePassword(len);
    }
  } else {
    return;
  }
  writePassword(len);
});

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

function checkParams(param) {
  // Variable to check the current parameter
  var checked = window.confirm('Select OK to include ' + param);
  return checked;
}

function generatePassword(len, params) {
  for (var i = 0; i < params.length; i++) {}
  var final = randomizer(alpha, 4, len);
  return final;
}

function randomizer(type, params, len) {
  for (var i = 0; i < type.length; i++) {
    var tmp = Math.floor(Math.random() * type.length);
    pass += type[tmp];
  }
  password += pass.slice(0, Math.ceil(len / 4));
  return password;
}
