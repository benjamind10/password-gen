// Universal Variables
var len = 50;
var params = [];
var tmp = '';
var finalKey = [];

// Slider Section
var slider = document.getElementById('myRange');
var output = document.getElementById('slider-length');

// Controls slider behavior
// Display the default slider value
output.innerHTML = 'Length: ' + slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = 'Length: ' + this.value;
  len = parseInt(this.value);
};

// Params Section
var upperCase = document.getElementById('upper').checked;
var lowerCase = document.getElementById('lower').checked;
var numbers = document.getElementById('numbers').checked;
var symbols = document.getElementById('symbols').checked;

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
  tmp = '';
  params = [];
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  // Resets parameters if no selection was made
  params = [];

  // Params Section
  var upperCase = document.getElementById('upper').checked;
  var lowerCase = document.getElementById('lower').checked;
  var numbers = document.getElementById('numbers').checked;
  var symbols = document.getElementById('symbols').checked;

  if (upperCase + lowerCase + numbers + symbols === 0) {
    var passwordText = document.querySelector('#password');
    passwordText.value = 'You need to select at least one.';
    return;
  }
  params.push(upperCase);
  params.push(lowerCase);
  params.push(numbers);
  params.push(symbols);

  writePassword();
});

// Function that generates the password
function generatePassword(len, key) {
  // Loops while the tmp pw is less than the length povided
  while (len > tmp.length) {
    // Picks a random function from the key array
    var addKey = key[Math.floor(Math.random() * key.length)];
    tmp += addKey();
  }
  return tmp;
}

// Function to select which keys to use
function getKeys(params) {
  // Array with all the functions to randomize characters
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
