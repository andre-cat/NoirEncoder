const removeAccents = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function encode() {
    enableNoOutputImage();

    let inputField = document.getElementById("input-field");

    let outputField = document.getElementById("output-field");

    let inputText = inputField.value;
    inputText = removeAccents(inputText);

    let outputText = "";

    for (const char of inputText) {
        switch (char) {
            case "a":
                outputText = outputText + "ai";
                break;
            case "e":
                outputText = outputText + "enter";
                break;
            case "i":
                outputText = outputText + "imes";
                break;
            case "o":
                outputText = outputText + "ober";
                break;
            case "u":
                outputText = outputText + "ufat";
                break;
            default:
                outputText = outputText + char;
                break;
        }
    }

    inputField.value = inputText;
    outputField.innerText = outputText;
}

function decode() {
    enableNoOutputImage();
    
    let inputField = document.getElementById("input-field");

    let outputField = document.getElementById("output-field");

    let inputText = inputField.value;
    inputText = removeAccents(inputText);

    let outputText = inputText;

    outputText = outputText.replace("ai", "a");
    outputText = outputText.replace("enter", "e");
    outputText = outputText.replace("imes", "i");
    outputText = outputText.replace("ober", "o");
    outputText = outputText.replace("ufat", "u");

    inputField.value = inputText;
    outputField.innerText = outputText;
}