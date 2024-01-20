const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password1 = document.querySelector('.password1');
const password2 = document.querySelector('.password2');
const submit = document.querySelector('.submit');



const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const password1Message = document.querySelector(".password1-msg");
const password2Message = document.querySelector(".password2-msg");




submit.addEventListener('click',(e) => {
    e.preventDefault();
    
    if (
    username.value === "" &&
    email.value === "" && 
    password1.value === "" && 
    password2.value === "" 
    ) {
        alert("please fill all input fields");
    }
    
    if (username.value === "") {
        showMessage(usernameMessage, "Please provide your name", "red");
    } else {
        showMessage(usernameMessage, "Great Name", "green")
    }

    if (email.value === "") {
        showMessage(emailMessage, "Please provide your email", "red");
    } else {
        showMessage(emailMessage, "Got your email", "green")
    }

    if (password1.value === "") {
        showMessage(password1Message, "Please provide your password", "red");
    } else {
        showMessage(password1Message, "valid password", "green")
    }

    if (password2.value === "") {
        showMessage(password2Message, "confirm your password", "red");
    } else if (password1.value !== password2.value) {
        showMessage(password2Message, "password do not match", "red")
    } else {
        showMessage(password2Message,"valid password","green")
    }

    





    });

    function showMessage(element,msg,color){
        element.style.visibility = "visible";
        element.textcontent = msg;
        element.style.color = color;
        element.previousElementsibiling.style.border = `2px solid ${color}`;
    }

