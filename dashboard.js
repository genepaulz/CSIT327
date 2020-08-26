const custBtn = document.getElementById("customerButton");
const prodBtn = document.getElementById("pBtn");

 custBtn.addEventListener("click", function(e){
    document.getElementById("content").style.display ="block";
    document.querySelector(".content").innerHTML=`
    <form action="">
    <table border="1px">
    <tr>
        <th>Date Registered</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Date of Birth</th>
        <th>Address</th>
        <th>&#10003;</th>
    </tr>
    </table>
</form>
    `
    document.getElementById("econtent").style.display ="inline";
    document.querySelector(".econtent").innerHTML=`
    <form action="">
    <button class="button">Update Selected</button>
    <button class="button">Delete Selected</button>
</form>
    `
    e.preventDefault()
 })

 prodBtn.addEventListener("click",function(e){
    document.getElementById("content").style.display ="block";
    document.querySelector(".content").innerHTML=`
    <form action="">
    <table border="1px">
    <tr>
        <th>Date Registered</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Name</th>
        <th>Price</th>
        <th>No. of Items</th>
        <th>&#10003;</th>
    </tr>
    </table>
</form>
    `
    document.getElementById("econtent").style.display ="inline";
    document.querySelector(".econtent").innerHTML=`
    <form action="">
    <button class="button">Update Selected</button>
    <button class="button">Delete Selected</button>
</form>
    `
    e.preventDefault()
 })