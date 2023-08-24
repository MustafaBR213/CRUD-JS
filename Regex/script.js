const number = document.getElementById("number");
const submit = document.getElementById("submit");


function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  
    return regex.test(str); 
  }
  

function processNum() {
    const num = number.value;
    if (telephoneCheck(num) === true) {
        
    }
}
telephoneCheck("555-555-5555");