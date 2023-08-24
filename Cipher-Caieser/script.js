const getwordInput = document.getElementById("getword");
const shiftInput = document.getElementById("shift");
const modeSelect = document.getElementById("modeSelect");
const submitButton = document.getElementById("submit");
const outputElement = document.getElementById("h2");

function cipher(word, shift) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        const charCode = word.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            result += word[i];
        }
    }
    return result;
}

function uncipher(word, shift) {
    return cipher(word, 26 - shift);
}

function processText() {
    const word = getwordInput.value;
    const shift = parseInt(shiftInput.value);
    const mode = modeSelect.value;

    if (!word || isNaN(shift)) {
        outputElement.textContent = "Please enter a valid word and shift value.";
        return;
    }

    let result;
    if (mode === "cipher") {
        result = cipher(word, shift);
    } else {
        result = uncipher(word, shift);
    }

    outputElement.textContent = `Result: ${result}`;
}

submitButton.addEventListener("click", processText);
