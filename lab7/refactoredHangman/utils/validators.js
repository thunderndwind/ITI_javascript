export function validateInput(inputValue) {
    let inputLength = inputValue.length;
    if (inputLength != 1) {
        alert("Only one letter allowed");
        return false;
    }

    let lastChar = inputValue.charAt(inputLength - 1);
    let charCode = lastChar.charCodeAt(0);

    return (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    );
}
