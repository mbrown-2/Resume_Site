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