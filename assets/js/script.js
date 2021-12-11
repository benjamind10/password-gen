// Universal Variables
var len = 0;
var params = [];
var pass = '';
var finalKey = [];

// Object that holds the kes
var keys = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: '!@#$%^&*()_+~\\`|}{[]:;?><,./-=',
};

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(len, getKeys(params));
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  // Resets values for new check;
  pass = '';
  params = [];
  len = 0;
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  // Resets parameters if no selection was made
  params = [];
  // Asks useer for lenght of password
  len = parseInt(
    window.prompt('Enter password length between 8 and 128 chars.')
  );
  // Conditional checks for appropiate format.
  if (!len) {
    window.alert('This needs to be a number.');
    return;
  } else if (len < 8 || len > 128) {
    len = window.alert('You need to provide a value between 8 and 128.');
    return;
  } else {
    // Checks the parameters
    var upperCase = window.confirm('Include upper case?');
    params.push(upperCase);
    var lowerCase = window.confirm('Include lower case?');
    params.push(lowerCase);
    var numbers = window.confirm('Include numbers?');
    params.push(numbers);
    var symbols = window.confirm('Include symbols?');
    params.push(symbols);
  }
  // Conditional to check if at least 1 parameter was selected.
  if (!upperCase && !lowerCase && !numbers && !symbols) {
    window.alert('You need to select at least one');
    return;
  } else {
    writePassword();
  }
});

// Function that generates the password
function generatePassword(len, key) {
  console.log(len, key);
  while (len > pass.length) {
    var addKey = key[Math.floor(Math.random() * key.length)];
    pass += addKey();
  }
  return pass;
}

// Function to select which keys to use
function getKeys(params) {
  // Full Array with all parameters enabled
  var getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    },
  ];
  // Resets final keys if app ran again
  finalKey = [];

  // Loops the params array and selects the corresponding functions
  for (var i = 0; i < params.length; i++) {
    if (params[i]) {
      finalKey.push(getKey[i]);
    }
  }
  return finalKey;
}
