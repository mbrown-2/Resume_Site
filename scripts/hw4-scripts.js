// Scoping down a sub-tree to access the dialog text, dialog box, and list of buttons.
let dialogText = document.getElementById('dialog_text');
let dialogBox = document.getElementById('custom_dialog');

let subTree_p1 = document.querySelectorAll('#part_1_buttons');
let buttons_p1 = subTree_p1[0].getElementsByTagName('button');

// Helper function to make the dialog box vanish on click
function vanish() {
    dialogBox.close();
}

// Helper function to handle printing statements based on user-input
function textResponse(input) {
    if (input == null || input == '') { 
        dialogText.innerHTML = 'Input was empty or declined.';
    } else {
        dialogText.innerHTML = ('You wrote: ' + input);
    }
}

// Alert button
// Note: setTimeout used in each function to make prompt vanish after a button-click
// setTimeout is necessary to bypass the event loop
function alertPressed() {
    dialogBox.close();
    setTimeout(() => {
        alert('This is an alert message!');
    }, 0);
}

// Confirm button
function confirmPressed() {
    dialogBox.close();
    let confirmationBool = 'To confirm or not to confirm... that is the question.';
    let responseStatement = 'The value returned by the confirm method is : ';
    setTimeout(() => { 
        dialogText.innerHTML = responseStatement + confirm(confirmationBool).toString();
        dialogBox.show(); 
    }, 0);
}

// Prompt button
function promptPressed() {
    dialogBox.close();
    setTimeout(() => {
        let result = prompt('Please enter some gibberish. Seriously!');
        textResponse(result);
        dialogBox.show();
    }, 0);
}

// Saffer Prompt button
function saferPressed() {
    dialogBox.close();
    setTimeout(() => {
        let result = prompt("Please enter some gibberish, but this time we'll use some DOMPurify magic so no funny business!");
        textResponse(DOMPurify.sanitize(result));
        dialogBox.show();
    }, 0);
}

function main() {
    buttons_p1[0].addEventListener('click', alertPressed);
    buttons_p1[1].addEventListener('click', confirmPressed);
    buttons_p1[2].addEventListener('click', promptPressed);
    buttons_p1[3].addEventListener('click', saferPressed);
    dialogBox.addEventListener('click', vanish);
}

window.addEventListener('DOMContentLoaded', main);