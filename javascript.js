"use strict"
console.log("Hello World");

function getData() {
    let email_of = document.getElementById("email").value
    let pass_of = document.getElementById("password").value
    console.log(email_of);
    console.log(pass_of);
    localStorage.setItem("Email", email_of)
    localStorage.setItem("password", pass_of)
    if (localStorage.getItem("Email") && localStorage.getItem("password")) {
        let link = "login.html"
        window.location.href = link;
    } else {
        alert("every field is required");
    }
}
function getData2() {
    let email_for = document.getElementById("email-login").value
    let pass_for = document.getElementById("password-login").value
    
    
    console.log(email_for);
    console.log(pass_for);
    if (( email_for==  localStorage.getItem("Email")) && ( pass_for ==  localStorage.getItem("password"))) {
        let link = "landing.html"
        window.location.href = link;
    } else {
        alert("Please Enter Valid Id and Password");
    }
}

function logMeOut() {
    let link = "index.html"
        window.location.href = link;
}
function deleteAcc() {
    localStorage.clear();
    let link = "index.html"
        window.location.href = link;
}

