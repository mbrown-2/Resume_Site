// Create variables + a subtree and handle access to all inputs within the dialog box
let dialogBox = document.getElementById('post_dialog');
let addPost = document.getElementById('add_post');
let cancelPost = document.getElementById('cancel_post');
let editPost = document.getElementById('edit_post');
let savePost = document.getElementById('save_post');
let messageNotif = document.getElementById('message_notif');
let postList = document.getElementById('post_list');
let subtree_p3 = document.getElementById('post_dialog');
let userInputs = subtree_p3.getElementsByTagName('input');
let title = userInputs[0];
let date = userInputs[1];
let summary = userInputs[2];

// Creating an array for localStorage
let localData = [];
let acceptPostData = () => {
    localData.push({
        title: title.value,
        date: date.value,
        summary: summary.value,
    });

    localStorage.setItem(Date.now().toString(), JSON.stringify(localData));
    console.log(localData);
};

// Helpers
function openBox() {
    savePost.style.dislay = 'inline';
    editPost.style.display = 'none';
    dialogBox.show();
}

function closeBox() {
    savePost.style.display = 'inline';
    editPost.style.display = 'none';
    dialogBox.close();
    title.value = '';
    date.value = '';
    summary.value = '';
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
        <h2 class="title">${postData['title']}</h2>
        <h3 class="date">${postData['date']}</h3>
        <p class="summary">${postData['summary']}</p>
        <button class="edit" onclick="changePost(this)">Edit</button>
        <button class="delete" onclick="removePost(this)">Delete</button>
        <br /><br />
    </div>
    `;
    acceptPostData();
    title.value = '';
    date.value = '';
    summary.value = '';
}

// Delete a post
let removePost = (element) => {
    element.parentElement.remove();
};

// Edit a post
let changePost = (element) => {
    // Modify visible buttons
    savePost.style.display = 'none';
    editPost.style.display = 'inline';

    // Obtain parent and send contents to dialog inputs
    let parent = element.parentElement;
    title.value = parent.querySelectorAll('.title')[0].innerHTML;
    date.value = parent.querySelectorAll('.date')[0].innerHTML;
    summary.value = parent.querySelectorAll('.summary')[0].innerHTML;
    dialogBox.show();

    // transfer data back into the parent, reset the button appearances, and empty dialog
    editPost.addEventListener('click', function() {
        let postData = readPostData();
        parent.querySelectorAll('.title')[0].innerHTML = postData['title'];
        parent.querySelectorAll('.date')[0].innerHTML = postData['date'];
        parent.querySelectorAll('.summary')[0].innerHTML = postData['summary'];
        savePost.style.display = 'inline';
        editPost.style.display = 'none';

        // Delay the refresh of dialog to prevent preemptive overwriting of values
        setTimeout(() => {
            title.value = '';
            date.value = '';
            summary.value = '';
            dialogBox.close();
        }, 0);
    });
};

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

