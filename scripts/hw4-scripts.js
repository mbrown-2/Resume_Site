let dialogText = document.getElementById('dialog_text');
let dialogBox = document.getElementById('custom_dialog');

let subTree_p1 = document.querySelectorAll('#part_1_buttons');
let buttons_p1 = subTree_p1[0].getElementsByTagName('button');

function vanish() {
    dialogBox.close();
}

function textResponse(input) {
    if (input == null || input == '') { 
        dialogText.innerHTML = 'Input was empty or declined.';
    } else {
        dialogText.innerHTML = ('You wrote: ' + input);
    }
}

function alertPressed() {
    dialogBox.close();
    alert('This is an alert message!');
}

function confirmPressed() {
    dialogBox.close();
    let confirmationBool = 'To confirm or not to confirm... that is the question.';
    let responseStatement = 'The value returned by the confirm method is : ';
    dialogText.innerHTML = responseStatement + confirm(confirmationBool).toString();
    dialogBox.show();
}

function promptPressed() {
    dialogBox.close();
    let result = prompt('Please enter some gibberish. Seriously!');
    textResponse(result);
    dialogBox.show();
}

function saferPressed() {
    dialogBox.close();
    let result = prompt("Please enter some gibberish, but this time we'll use some DOMPurify magic so no funny business!");
    textResponse(DOMPurify.sanitize(result));
    dialogBox.show();
}

function main() {
    buttons_p1[0].addEventListener('click', alertPressed);
    buttons_p1[1].addEventListener('click', confirmPressed);
    buttons_p1[2].addEventListener('click', promptPressed);
    buttons_p1[3].addEventListener('click', saferPressed);
    dialogBox.addEventListener('click', vanish);
}

window.addEventListener('DOMContentLoaded', main);