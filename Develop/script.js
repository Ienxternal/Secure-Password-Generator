// Assignment code here
const resultEl = document.getElementById('password');
// const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const passLength = document.querySelector('#length');
const passLengthResult = document.querySelector('#length-result')
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.getElementById("configure");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Range Selector
document.addEventListener('DOMContentLoaded', () => {
  passLength.value = 60  
  passLengthResult.innerText = 60
  let onLoadLength = passLength.value
  result.value = generatePassword(onLoadLength)
})
passLength.addEventListener('change', (event) => {
  passLengthResult.innerText  = event.target.value                   
})







// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


