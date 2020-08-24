document.addEventListener('contextmenu', event => event.preventDefault());

function clearFields() {
    // Clear forms here
    document.getElementById("un").value = "";
    document.getElementById("pw").value = "";
}
window.onload = clearFields;

function validateForm() {

    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    var username = "Admin"; 
    var password = "Password";

    if ((un === username) && (pw === password)) {
        return true;
    }

    else if ((un === username) && ((pw !== password) && (pw !== ""))) {
        errorValidate();
        return false;
    }

    else if ((un === "") && (pw === "")) {
        showValidate();
        return false;
    }

    else if ((un === "") && (pw !== "")) {
        showValidate1();
        return false;
    }

    else if ((un !== "") && (pw === "")) {
        showValidate2();
        return false;
    }
    
    else {
        alert();
        return false;
    }

    function alert() {
        var element1 = document.getElementById("toggler1");
        element1.classList.add("error-validate");
        //window.alert("Incorrect Credentials");
    }

    function errorValidate() {
        var element2 = document.getElementById("toggler2");
        element2.classList.add("error-validate");
    }
    
    function hideError() {
        var element2 = document.getElementById("toggler2");
        element1.classList.remove("error-validate");
    }

    function showValidate() {
        var element1 = document.getElementById("toggler1");
        var element2 = document.getElementById("toggler2");
        element1.classList.add("alert-validate");
        element2.classList.add("alert-validate");
    }

    function showValidate1() {
        var element1 = document.getElementById("toggler1");
        element1.classList.add("alert-validate");
    }

    function showValidate2() {
        var element2 = document.getElementById("toggler2");
        element2.classList.add("alert-validate");
    }

    function hideValidate1() {
        var element1 = document.getElementById("toggler1");
        element1.classList.remove("alert-validate");
    }

    function hideValidate2() {
        var element2 = document.getElementById("toggler2");
        element2.classList.remove("alert-validate");
    }
}