function enableNoOutputImage() {
    const noOutputImage = document.getElementById('no-output-image');

    if (inputFieldHasText()) {
        noOutputImage.classList.add('hidden-error-image');
        noOutputImage.classList.remove('visible-error-image');
    } else {
        setTimeout(() => {
            noOutputImage.classList.add('visible-error-image');
            noOutputImage.classList.remove('hidden-error-image');
        }, noOutputImage.style.animationDuration)
        noOutputImage.classList.add('hidden-error-image');
        noOutputImage.classList.remove('visible-error-image');
    }
}

function inputFieldHasText() {
    const inputField = document.getElementById('input-field');

    return inputField.value !== "";
}