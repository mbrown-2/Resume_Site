// Create variables + a subtree and handle access to all inputs within the dialog box
let dialogBox = document.getElementById('post_dialog');
let addPost = document.getElementById('add_post');
let cancelPost = document.getElementById('cancel_post');
let savePost = document.getElementById('save_post');
let messageNotif = document.getElementById('message_notif');
let postList = document.getElementById('post_list');

let subtree_p3 = document.getElementById('post_dialog');
let userInputs = subtree_p3.getElementsByTagName('input');
let title = userInputs[0];
let date = userInputs[1];
let summary = userInputs[2];


// Helpers
function openBox() {
    dialogBox.show();
}

function closeBox() {
    dialogBox.close();
}

// Read data
function readPostData() {
    var postData = {};
    postData['title'] = title.value;
    postData['date'] = date.value;
    postData['summary'] = summary.value;
    return postData;
}

// Reject if one or more dialog box entries are empty
let validation = () => {
    dialogBox.close();
    if (title.value === '' || title.value.trim() == 0  || date.value === '' || summary.value === '' || summary.value.trim() == 0) {
        closeBox();
        setTimeout(() => {
            alert('One or more inputs were blank.');
            console.log('fail');
        }, 0);
    } else {
        createPost();
    }
}

// Create a post
let createPost = () => {
    let postData = readPostData();
    postList.innerHTML += `
    <div class="entry">
        <h2>${postData['title']}</h2>
        <h3>${postData['date']}</h3>
        <p>${postData['summary']}</p>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
        <br /><br />
    </div>
    `;
    title.value = '';
    date.value = '';
    summary.value = '';
}

// Post deletion
let deletePost = (entry) => {};

// Main function for window object to call
// Again, breaking everything into separate functions for a granular approach
function main() {
    addPost.addEventListener('click', openBox);
    cancelPost.addEventListener('click', closeBox);
    savePost.addEventListener('click', validation);
}

window.addEventListener('DOMContentLoaded', main);

// tip: add localStorage at the end

// delete and edit buttons