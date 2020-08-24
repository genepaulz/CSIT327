document.addEventListener('contextmenu', event => event.preventDefault());

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var currentDate = new Date(),
    day = dayNames[currentDate.getDay()-1];
    date = currentDate.getDate();
    month = monthNames[currentDate.getMonth()];
    year = currentDate.getFullYear();
                
var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

var suffix = "AM";
    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

document.getElementById("dt").innerHTML = day + ", " + month + " " + date + ", " + year + " - " + hours + ":" + minutes + " " + suffix

var employees = document.getElementsByClassName("employees")[0];

var payroll = document.getElementsByClassName("payroll")[0];

var logout = document.getElementsByClassName("logout")[0];

employees.onclick = function() {
    document.location.href = "employees.php";
}

payroll.onclick = function() {
    document.location.href = "payroll.php";
}

logout.onclick = function() {
    document.location.href = "login.php";
}