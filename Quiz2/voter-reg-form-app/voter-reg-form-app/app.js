// console.log("hello vter");
let voterForm = document.getElementById("voterForm");
console.log(voterForm);
voterForm.addEventListener("submit", submitVoterRegistrationForm);

function submitVoterRegistrationForm(event){
   event.preventDefault();
   console.log("Note: All data are required");
   let voterNo = document.getElementById("voterNo");
   let firstName = document.getElementById("firstName");
   let lastName = document.getElementById("lastName");
   let levelOfStudy = document.getElementById("levelOfStudy");
   
   alert(
     `Voter  No:  ${voterNo.value} 
      First Name: ${firstName.value} 
      Last Name: ${lastName.value} 
      Level of Study: ${levelOfStudy.value} 
      `
   );
}