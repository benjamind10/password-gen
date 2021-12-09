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
  if (checkLen()) {
    var upper = checkParams('Upper case');
    console.log(upper);

    var lower = checkParams('Lower case');
    console.log(lower);

    var num = checkParams('Numeric value');
    console.log(num);

    var symb = checkParams('Symbol');
    console.log(symb);

    if (!upper && !lower && !num && !symb) {
      window.alert('You need to select at least 1');
      return;
    } else {
      generatePassword();
    }
  } else {
    return;
  }
});

function generatePassword() {
  console.log('working');
}

function checkLen() {
  // New variable to keep track of password lenght
  var len = window.prompt('Password length 8-128:');
  // Conditional check to see if lenght is valid
  if (len < 8) {
    window.alert('You need to provide a value greater than 8.');
    return false;
  }
  return true;
}

function checkParams(param) {
  var checked = window.confirm('Select OK to include ' + param);
  return checked;
}
