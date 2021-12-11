// Universal Variables
var len = 0;
var params = [];
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
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  params = [];
  len = parseInt(
    window.prompt('Enter password length between 8 and 128 chars.')
  );
  if (!len) {
    window.alert('This needs to be a number.');
  } else if (len < 8 || len > 128) {
    len = window.alert('You need to provide a value between 8 and 128.');
    return;
  } else {
    var upperCase = window.confirm('Include upper case?');
    params.push(upperCase);
    var lowerCase = window.confirm('Include lower case?');
    params.push(lowerCase);
    var numbers = window.confirm('Include numbers?');
    params.push(numbers);
    var symbols = window.confirm('Include symbols?');
    params.push(symbols);
  }
  if (!upperCase && !lowerCase && !numbers && !symbols) {
    window.alert('You need to select at least one');
    return;
  } else {
    console.log('Success');
  }
});

function generatePassword(len, key) {}

function getKes(params) {
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

  if (params[0] && params[1] && params[2] && params[3]) {
    getKey = getKey;
  } else if (params[1] && params[2] && params[3]) {
    var getKey = [
      function lowerCase() {
        return keys.lowerCase[
          Math.floor(Math.random() * keys.lowerCase.length)
        ];
      },
      function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
      },
      function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
      },
    ];
  } else if (params[0] && params[2] && params[3]) {
    var getKey = [
      function upperCase() {
        return keys.upperCase[
          Math.floor(Math.random() * keys.upperCase.length)
        ];
      },
      function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
      },
      function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
      },
    ];
  } else if (params[0] && params[1] && params[3]) {
    var getKey = [
      function upperCase() {
        return keys.upperCase[
          Math.floor(Math.random() * keys.upperCase.length)
        ];
      },
      function lowerCase() {
        return keys.lowerCase[
          Math.floor(Math.random() * keys.lowerCase.length)
        ];
      },
      function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
      },
    ];
  } else {
    var getKey = [
      function upperCase() {
        return keys.upperCase[
          Math.floor(Math.random() * keys.upperCase.length)
        ];
      },
      function lowerCase() {
        return keys.lowerCase[
          Math.floor(Math.random() * keys.lowerCase.length)
        ];
      },
      function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
      },
    ];
  }
  return getKey;
}
