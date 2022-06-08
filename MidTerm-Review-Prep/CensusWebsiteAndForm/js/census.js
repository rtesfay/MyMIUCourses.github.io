'use strict'
window.onload=function(){
    const censusForm=document.getElementById("censusForm");
    censusForm.addEventListener("submit",event=>{
        event.preventDefault();


        const fullName = document.getElementById("fullName");
        const citizenId = document.getElementById("citizenId");
        const ssn = document.getElementById("ssn");
        const state = document.getElementById("state");
        const SeniorCitzen = censusForm.elements["radBtnSnrCitizen"];

        
        alert(`
        fullName: ${fullName.value}
        citizenId: ${citizenId.value},
        ssn: ${ssn.value}
        state: ${state.value}
        Senior Citizen: ${SeniorCitzen.value}

    `);
    

    fullName.value = "";
    citizenId.value = "";
    ssn.value = "";
    state.value = "";

    })
}


    
    
    
    
