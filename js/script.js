const text = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncripted() {
    const textEncripted = encripting(text.placeholder.value);
    message.placeholder.value = textEncripted;

}

console.log(text.value);
console.log(text.placeholder.value);

(text.placeholder) = "Hello world";

btnEnc = document.querySelector(".btn-encriptar")


console.log(btnEnc);
function encripting(stringEncripted) {
    let conditions = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncripted = stringEncripted.toLowerCase();

    for (let i = 0; i < conditions.length; index++) {
        if (stringEncripted.includes(conditions[i][0])) {
            stringEncripted = stringEncripted.replaceAll(conditions[i][0], conditions[i][1])
            return stringEncripted
        }
    }
}
