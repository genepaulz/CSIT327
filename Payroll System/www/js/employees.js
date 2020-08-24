document.addEventListener('contextmenu', event => event.preventDefault());

function clearFields() {
    // Clear forms here
    document.getElementById("fn").value = "";
    document.getElementById("mn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("s").value = "";
    document.getElementById("add").value = "";
    document.getElementById("bd").value = "";
    document.getElementById("age").value = "";
    document.getElementById("p").value = "";
    document.getElementById("opt").value = "";
    document.getElementById("am").value = "";
    document.getElementById("tin").value = "";
    document.getElementById("sss").value = "";
    document.getElementById("pag").value = "";
    document.getElementById("phi").value = "";
}
window.onload = clearFields;

var home = document.getElementsByClassName("home")[0];

var logout = document.getElementsByClassName("logout")[0];

// Get the modal
var modal = document.getElementsByClassName("modal")[0];

// Get the button that opens the modal
var addNew = document.getElementsByClassName("addNew")[0];

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, go back 
home.onclick = function() {
    document.location.href = "home.php";
}

logout.onclick = function() {
    document.location.href = "login.php";
}

// When the user clicks the button, open the modal 
addNew.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
    clearFields();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validateForm() {

    var fn = document.getElementById("fn").value;
    var ln = document.getElementById("ln").value;
    var add = document.getElementById("add").value;
    var bd = document.getElementById("bd").value;
    var age = document.getElementById("age").value;
    var p = document.getElementById("p").value;
    var am = document.getElementById("am").value;
    var tin = document.getElementById("tin").value;
    var sss = document.getElementById("sss").value;
    var pag = document.getElementById("pag").value;
    var phi = document.getElementById("phi").value;

    if ((fn !== "") && (ln !== "") && (add !== "") && (bd !== "") && (age !== "") && (p !== "") && (am !== "") && (tin !== "") && (sss !== "") && (pag !== "") && (phi !== "")) {
        return true;
    }

    else if ((fn === "") && (ln === "") && (add === "") && (bd === "") && (age === "") && (p === "") && (am === "") && (tin === "") && (sss === "") && (pag === "") && (phi === "")) {
        showValidate();
        return false;
    }

    else {
    	alert("All fields are required");
    	return false;
    }

    function showValidate() {
        var element1 = document.getElementById("val1");
        var element2 = document.getElementById("val2");
        var element3 = document.getElementById("val3");
        var element4 = document.getElementById("val4");
        var element5 = document.getElementById("val5");
        var element6 = document.getElementById("val6");
        var element7 = document.getElementById("val7");
        var element8 = document.getElementById("val8");
        var element9 = document.getElementById("val9");
        var element10 = document.getElementById("val10");
        var element11 = document.getElementById("val11");
        element1.classList.add("alert-validate");
        element2.classList.add("alert-validate");
        element3.classList.add("alert-validate");
        element4.classList.add("alert-validate");
        element5.classList.add("alert-validate");
        element6.classList.add("alert-validate");
        element7.classList.add("alert-validate");
        element8.classList.add("alert-validate");
        element9.classList.add("alert-validate");
        element10.classList.add("alert-validate");
        element11.classList.add("alert-validate");
    }
}