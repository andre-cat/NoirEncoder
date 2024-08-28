function enableNoOutputImage() {
    const noOutputImage = document.getElementById('no-output-image');

    if (inputFieldHasText()) {
        noOutputImage.classList.remove('visible-error-image');
    } else {
        if (!noOutputImage.classList.contains("visible-error-image")) {
            setTimeout(() => {
                noOutputImage.classList.remove('visible-error-image');
            }, 5500)
            noOutputImage.classList.add('visible-error-image');
        }
    }
}

function enableCopyButton() {
    const copyButton = document.getElementById('copy-button');
    if (inputFieldHasText()) {
        copyButton.style.display = "block";
    } else {
        copyButton.style.display = "none";
    }
}

function inputFieldHasText() {
    const inputField = document.getElementById('input-field');

    return inputField.value !== "";
}