
// To avoid the acents and Capital letters. We created the next function.
function validateInput() {
    let inputText = document.getElementById("inputText").value;
    document.getElementById("inputText").value = inputText.replace(/[^a-z\s]/g, '');
}

//Function to encrypt the text
function encryptText() {
    let textToEncrypte = document.querySelector(".text-area").value;
    let encryptedText = textToEncrypte
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector(".empty-text").innerHTML = encryptedText;
    document.querySelector(".text-area").value = "";
}


//Function to desencrypt the text
function desencryptText() {
    let textToDesencrypte = document.querySelector(".text-area").value;
    let decryptedText = textToDesencrypte
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector(".empty-text").innerHTML = decryptedText;
    document.querySelector(".text-area").value = "";
}

//Function to copy the text encrypted or desencrypted
function copy() {
    const btnCopy = document.querySelector(".btn-copy");
    let tectToCopy = document.querySelector(".empty-text").textContent;
    let textcopied = navigator.clipboard.writeText(tectToCopy);
    console.log("Hello WQorld");
    return textcopied
}
