
// To avoid the acents. Let's create this function to delete any acent written.
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
}




// function btnEncripted() {
//     const textEncripted = encripting(text.placeholder.value);
//     message.placeholder.value = textEncripted;

// }

// console.log(text.value);
// console.log(text.placeholder.value);

// (text.placeholder) = "Hello world";

// btnEnc = document.querySelector(".btn-encriptar")


// // console.log(btnEnc);

// function encripting(stringEncripted) {
//     let conditions = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringEncripted = stringEncripted.toLowerCase();

//     for (let i = 0; i < conditions.length; index++) {
//         if (stringEncripted.includes(conditions[i][0])) {
//             stringEncripted = stringEncripted.replaceAll(conditions[i][0], conditions[i][1])
//             return stringEncripted
//         }
//     }
// }
