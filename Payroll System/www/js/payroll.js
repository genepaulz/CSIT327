document.addEventListener('contextmenu', event => event.preventDefault());

var home = document.getElementsByClassName("home")[0];

var logout = document.getElementsByClassName("logout")[0];

home.onclick = function() {
    document.location.href = "home.php";
}

logout.onclick = function() {
    document.location.href = "login.php";
}