// Assignment Code
var generateBtn = document.querySelector('#generate');

var params = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  if (checkLen(len) > 8) {
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
      generatePassword();
    }
  } else {
    return;
  }
  generatePassword();
});

function checkLen(len) {
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

  for (var i = 0; i < alpha.length; i++) {
    var tmp = Math.floor(Math.random() * alpha.length);
    pass += alpha[tmp];
  }
  password += pass.slice(0, Math.ceil(len / 4));

  pass = '';
  for (var i = 0; i < alpha.length; i++) {
    var tmp = Math.floor(Math.random() * alpha.length);
    pass += alpha[tmp].toUpperCase();
  }
  password += pass.slice(0, Math.ceil(len / 4));

  pass = '';
  for (var i = 0; i < numbers.length; i++) {
    var tmp = Math.floor(Math.random() * numbers.length);
    pass += numbers[tmp];
  }
  password += pass.slice(0, Math.ceil(len / 4));

  pass = '';
  for (var i = 0; i < symbols.length; i++) {
    var tmp = Math.floor(Math.random() * symbols.length);
    pass += symbols[tmp];
  }
  password += pass.slice(0, Math.ceil(len / 4));

  if (password.length > len) {
    var diff = password.length - len;
    password = password.slice(diff);
  }

  console.log(password, password.length);
}
