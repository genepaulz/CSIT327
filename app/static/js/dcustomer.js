const custBtn = document.getElementById("customerButton");

 custBtn.addEventListener("click", function(e){
    document.getElementById("content").style.display ="block";
    
    e.preventDefault()
 })
