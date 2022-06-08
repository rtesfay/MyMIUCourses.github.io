"use strict"
window.onload=function(){
    const censusForm=document.getElementById("censusForm");
    censusForm.addEventListener("submit", event =>{
        event.preventDefault();
        const fullName=document.getElementById("fullName");
        const citzenId=document.getElementById("citzenId");
        const ssn=document.getElementById("ssn");
        const state=document.getElementById("state");
        const snrCitzen=form.elements["radBtnSnrCitzen"];
        const formData=
        `
        Full Name: ${fullName.value}
        Citzen ID: ${citzenId.value}
        Social Sec No: ${ssn.value}
        State: ${state.value}
    Is a Senior Citzen: ${snrCitzen.value}
    ;
    alert(formData);
    fullName.value="";
    citzenID.value="";


    `

    })
}