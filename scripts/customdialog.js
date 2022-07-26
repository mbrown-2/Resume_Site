// Obtain dialog box by ID
let modalBox = document.getElementById('dialog_p2');

// Subtree for accessing buttons later below
let subTree_p2 = document.querySelectorAll('#part_2_buttons');
let buttons_p2 = subTree_p2[0].getElementsByTagName('button');

// Obtain a subtree's nodes
let modalNodes = document.querySelectorAll('#dialog_p2')[0].childNodes;
// The nodes are separated by 'text' nodes in the DOM
let modalText = modalNodes[1];          // <p>
let modalLabel = modalNodes[3];         // <label>
let modalInput = modalNodes[5];         // <input>
let modalCancel = modalNodes[7];        // <button>
let modalConfirm = modalNodes[9];       // <button>

// Helper method for closing the dialog box manually via 'click' event
function modalVanish() {
    modalBox.close();
}

// Custom alert button
function customAlert() {
    
}

// Custom confirm button
function customConfirm() {

}

// Custom prompt button
function customPrompt() {

}

// Main function for window to call
function main() {
    buttons_p2[0].addEventListener('click', customAlert);
    buttons_p2[1].addEventListener('click', customConfirm);
    buttons_p2[2].addEventListener('click', customPrompt);
    modalBox.addEventListener('click', modalVanish);
}

// Window object with event listener for main()
window.addEventListener('DOMContentLoaded', main);


/*

// Import funnyResponse() from hw4-scripts.js as backup
import {funnyResponse} from '../scripts/hw4-scripts.js';

// A series of simple helper functions for minimizing
// the usage of "document.getElementById('....')"
function openModal() {
    document.getElementById('part_2').showModal();
}

function closeModal() {
    document.getElementById('part_2').close();
}

function modalDialog(message) {
    document.getElementById('modal_dialog').innerHTML = message;
    openModal();
}

// Window object with event listeners.
window.addEventListener('DOMContentLoaded', function() {

    // Pressing alert
    document.getElementById('alert_custom').addEventListener('click', function() {
        modalDialog('This is a custom alert!');
        // Hide the cancel button (alert should only have a single button)
        document.getElementById('cancel_modal').style.display = 'none';
        document.getElementById('inputLabel').style.display = 'none';
        document.getElementById('anyInput').style.display = 'none';
        document.getElementById('confirm_modal').addEventListener('click', function() {
            closeModal();
            document.getElementById('part_2_output').innerHTML = 'Alert box closed.';
        });
    });

    // Pressing confirm
    document.getElementById('confirm_custom').addEventListener('click', function() {
        modalDialog('To confirm or not to confirm... that is the question once again...');
        document.getElementById('cancel_modal').style.display = 'inline';
        document.getElementById('inputLabel').style.display = 'none';
        document.getElementById('anyInput').style.display = 'none';
        document.getElementById('confirm_modal').addEventListener('click', function() {
            closeModal();
            document.getElementById('part_2_output').innerHTML = 'You confirmed!';
        });
        document.getElementById('cancel_modal').addEventListener('click', function() {
            closeModal();
            document.getElementById('part_2_output').innerHTML = 'You canceled!';
        });
    });

    // Pressing prompt
    document.getElementById('prompt_custom').addEventListener('click', function() {
        modalDialog('Quickly! Mash in some random spiel:');
        let clean = DOMPurify.sanitize(document.getElementById('anyInput').value);
        document.getElementById('cancel_modal').style.display = 'inline';
        document.getElementById('inputLabel').style.display = 'inline';
        document.getElementById('anyInput').style.display = 'inline';
        document.getElementById('confirm_modal').addEventListener('click', function() {
            document.getElementById('part_2_output').innerHTML = clean;
            closeModal();
        });
        document.getElementById('cancel_modal').addEventListener('click', function() {
            document.getElementById('part_2_output').innerHTML = 'You declined your spiel!';
            closeModal();
        });
    });
});

// export {closeModal, modal_alert, modal_confirm, modal_prompt};

*/