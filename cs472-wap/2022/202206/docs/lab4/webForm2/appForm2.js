console.log("Hello");

window.onload = function() {
    const emailForm = document.getElementById("emailForm");
    emailForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailAddress = document.getElementById("email adress").value;
       // const password=document.getElementById("password").value;
        console.log(emailAddress);
       // console.log(password);
    });
    
    
}
/**
 * 
let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", submitForm);
function submitForm(event){
   let email_address = document.getElementById("email");
   let password = document.getElementById("password");
   let check = document.getElementById("check");
   let url = document.getElementById("url");
   let user_details = {
       email: email_address.value,
       password: password.value,
       url: url.value,
       check: check.value
   }
   if(email_address.value == '' || password.value ==''|| url.value ==''|| check.value ==''){
       console.log("Enter information in all fields");
   }
   else{
       console.log(user_details);
       alert("Check the console");
   }
   event.preventDefault();
}
 */