// Assignment code here
// Declaring variables and constants
const resultEl = document.getElementById('password');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const passLength = document.querySelector('#length');
const passLengthResult = document.querySelector('#length-result')
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// Creating modal function upon clicking generate button
const modal = document.getElementById("myModal");
const btn = document.getElementById("configure");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Creating event listener for range selection
document.addEventListener('DOMContentLoaded', () => {
	passLength.value = 10  
  passLengthResult.innerText = 10
})
passLength.addEventListener('input', (event) => {
passLengthResult.innerText  = event.target.value                   
})

//Function to declare letters, numbers and symbols on the ASCII table
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//Event listener for generate button
generate.addEventListener('click', () => {
	const length = +passLength.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  modal.style.display = "none";
});

//Function to generate password string using user input and return password string
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	if(typesCount === 0) {
		return '';
	}
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length).split('').sort(() => Math.random() - 0.5).join('');
}


