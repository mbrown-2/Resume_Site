// Function pre-defined to be referenced for the alert button inside the window object.
// Also created to demonstrate usage of arrow syntax for function calling.
let functionResponse = function() {};

// Helper function for closing the dialog box
let closeBox = function() {
    document.getElementById('custom_dialog').close();
}

// Helper function for displaying a correct text-response
function funnyResponse(result) {
    // Prompt response (based on input)
    if (result == null) {
        document.getElementById('dialog_text').innerHTML =
        'You did not enter anything!';
    }
    else if (result == 'Enter here:') {
        document.getElementById('dialog_text').innerHTML =
        'Well... "Enter here:" is technically gibberish, but still...';
    }
    else {
        document.getElementById('dialog_text').innerHTML =
        'You responded with: ' + result;
    }
    document.getElementById('custom_dialog').show();
}

// Window object with event listeners.
window.addEventListener('DOMContentLoaded', function() {
    
    // Pressing alert
    let button_alert = document.getElementById('alert');
    button_alert.addEventListener('click', functionResponse = () => {
        closeBox();
        alert('This is an alert message!');
    });

    // Pressing confirm
    let button_confirm = document.getElementById('confirm');
    button_confirm.addEventListener('click', function() {
        closeBox();
        let confirmationBool = 'To confirm or not to confirm... that is the question.';
        let responseStatement = 'The value returned by the confirm method is : ';
        document.getElementById('dialog_text').innerHTML = responseStatement + confirm(confirmationBool).toString();
        document.getElementById('custom_dialog').show();
    });

    // Pressing prompt
    let button_prompt = document.getElementById('prompt');
    button_prompt.addEventListener('click', function() {
        closeBox();
        let result = prompt("Please enter some gibberish. Seriously!", "Enter here:");
        funnyResponse(result);
    });

    // Pressing safer-prompt
    let button_safer_prompt = document.getElementById('safer_prompt');
    button_safer_prompt.addEventListener('click', function() {
        closeBox();
        let result = prompt("Please enter a number but this time we'll use some DOMPurify magic, so no funny business!", "Enter here:");
        let clean = DOMPurify.sanitize(result);
        funnyResponse(clean);
        // Prompt response (based on input)
    });
});