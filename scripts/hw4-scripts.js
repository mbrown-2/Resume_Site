// Function pre-defined to be referenced for the alert button inside the window object.
// Also created to demonstrate usage of arrow syntax for function calling.
let functionResponse = function() {};



window.addEventListener('DOMContentLoaded', function() {
    let button_alert = document.getElementById('alert');
    button_alert.addEventListener('click', functionResponse = () => {
        alert('This is an alert message!');
    });

    let button_confirm = document.getElementById('confirm');
    button_confirm.addEventListener('click', function() {
        document.getElementById('confirm_target').innerHTML = 
        'The value returned by the confirm method is : (the value)';
    });

    let button_prompt = document.getElementById('prompt');
    button_prompt.addEventListener('click', function() {
        let result = prompt("Please enter some gibberish. Seriously!", "Enter here:");
        if (result == null) {
            document.getElementById('prompt_target').innerHTML =
            'You did not enter anything!';
        }
        else if (result == 'Enter here:') {
            document.getElementById('prompt_target').innerHTML =
            'Well... "Enter here:" is technically gibberish, but still...';
        }
        else {
            document.getElementById('prompt_target').innerHTML =
            'You responded with: ' + result;
        }
    });

    let button_safer_prompt = document.getElementById('safer_prompt');
    button_safer_prompt.addEventListener('click', function() {
        let result = prompt("Please enter a number but this time we'll use some DOMPurify magic, so no funny business!", "Enter here:");
        let clean = DOMPurify.sanitize(result);
        if (clean == null) {
            document.getElementById('safer_prompt_target').innerHTML =
            'You did not enter anything!';
        }
        else if (clean == 'Enter here:') {
            document.getElementById('safer_prompt_target').innerHTML =
            'Well... "Enter here:" is technically gibberish, but still...';
        }
        else {
            document.getElementById('safer_prompt_target').innerHTML =
            'You responded with: ' + clean;
        }
    });
});