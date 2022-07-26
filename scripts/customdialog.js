// Obtain dialog box by ID
let modalBox = document.getElementById('dialog_p2');
let modalOutput = document.getElementById('output_p2');

// Subtree for accessing buttons later below
let subTree_p2 = document.querySelectorAll('#part_2_buttons');
let buttons_p2 = subTree_p2[0].getElementsByTagName('button');

// Obtain a subtree's nodes
let modalNodes = document.querySelectorAll('#dialog_p2')[0].childNodes;
console.log(modalNodes);
// The nodes are separated by 'text' nodes in the DOM
let modalText = modalNodes[1];              // <p>
let modalLabel = modalNodes[3];             // <label>
let modalInput = modalNodes[5];             // <input>
let modalCancel = modalNodes[7];            // <button>
let modalAlertConfirm = modalNodes[9];      // <button>
let modalConfirm = modalNodes[11];          // <button>

// Confirm button helper (removes illegal invocation)
function closeModal() {
    modalBox.close();
    modalOutput.innerHTML = 'You typed: ' + modalInput.value;
    modalInput.value = '';
}

function confirmation() {
    modalBox.close();
    modalOutput.innerHTML = 'You confirmed.';
}

function cancellation() {
    modalBox.close();
    modalInput.value = '';
    modalOutput.innerHTML = 'You cancelled.';
}

// Helper function to reset display of child elements in dialog box
function contentVanish() {
    modalLabel.style.display = 'none';
    modalInput.style.display = 'none';
    modalCancel.style.display = 'none';
    modalAlertConfirm.style.display = 'none';
    modalConfirm.style.display = 'none';
    modalOutput.innerHTML = '';
}

// Custom alert button
function customAlert() {
    modalBox.close();
    setTimeout(() => {
        contentVanish()
        modalAlertConfirm.style.display = 'inline';
        modalText.innerHTML = 'This is a custom alert!';
        modalBox.show();
    });
}

// Custom confirm button
function customConfirm() {
    modalBox.close();
    setTimeout(() => {
        contentVanish();
        modalCancel.style.display = 'inline';
        modalConfirm.style.display = 'inline';
        modalText.innerHTML = 'Shall thou confirm thy message?';
        modalBox.show();
    });
}

// Custom prompt button
function customPrompt() {
    modalBox.close();
    setTimeout(() => {
        contentVanish();
        modalLabel.style.display = 'inline';
        modalInput.style.display = 'inline';
        modalCancel.style.display = 'inline';
        modalAlertConfirm.style.display = 'inline';
        modalText.innerHTML = 'Type in any random spiel:';
        modalBox.show();
    });
}

// Main function for window to call
function main() {
    modalAlertConfirm.addEventListener('click', closeModal);
    modalCancel.addEventListener('click', cancellation);
    modalConfirm.addEventListener('click', confirmation);
    buttons_p2[0].addEventListener('click', customAlert);
    buttons_p2[1].addEventListener('click', customConfirm);
    buttons_p2[2].addEventListener('click', customPrompt);
}

// Window object with event listener for main()
window.addEventListener('DOMContentLoaded', main);