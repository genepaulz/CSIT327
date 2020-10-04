const prodBtn = document.getElementById("pBtn");

 prodBtn.addEventListener("click",function(e){
    document.getElementById("content").style.display ="block";    
    e.preventDefault()
 })
