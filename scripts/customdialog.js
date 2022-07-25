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

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('alert_custom').addEventListener('click', function() {
        modalDialog('This is a custom alert!');
        document.getElementById('cancel_modal').style.visibility = 'hidden';
        document.getElementById('confirm_modal').addEventListener('click', function() {
            closeModal();
            document.getElementById('part_2_output').innerHTML = 'Alert box closed.';
        });
    });

    document.getElementById('confirm_custom').addEventListener('click', function() {
        modalDialog('To confirm or not to confirm... that is the question once again...');
        document.getElementById('cancel_modal').style.visibility = 'visible';
        document.getElementById('confirm_modal').addEventListener('click', function() {
            closeModal();
            document.getElementById('part_2_output').innerHTML = 'You confirmed!';
        });
        document.getElementById('cancel_modal').addEventListener('click', function() {
            closeModal();
            document.getElementById('part_2_output').innerHTML = 'You canceled!';
        });
    });

    document.getElementById('prompt_custom').addEventListener('click', function() {

    });
});

// export {closeModal, modal_alert, modal_confirm, modal_prompt};