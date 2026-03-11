function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name=="" || email==""){
document.getElementById("msg").innerHTML="Please fill all fields!";
return false;
}

document.getElementById("msg").innerHTML="Message sent successfully!";
return false;
}

function darkMode(){
document.body.classList.toggle("dark");
}