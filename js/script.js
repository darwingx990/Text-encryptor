const text = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncripted() {
    const textEncripted = encripting(text.value);
    message.value = textEncripted;

}

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
