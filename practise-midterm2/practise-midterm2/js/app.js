"use strict";
window.onload=function(){
    let patients = [];
    const table = document.getElementById("my-tbody");
   
    const crossForm = document.getElementById("crossForm");
    crossForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const patientId = document.getElementById("patientId");
        const firstName = document.getElementById("firstName");
        const middleName = document.getElementById("middleName");
        const lastName = document.getElementById("lastName");
        const dob = document.getElementById("dob");
        const department = document.getElementById("department");
        const outPatient =  crossForm.elements["outPatient"];

       let patient = {
           patientId:patientId.value,
           firstName:firstName.value,
           middleName: middleName.value,
           lastName: lastName.value,
           dob: dob.value,
           department: department.value,
           outPatient: outPatient.value

       };
       patients.push(patient);

       table.innerHTML = "";
       patients.map(patient =>{
        let row = table.insertRow();
        let pId = row.insertCell(0);
        pId.innerHTML = patient.patientId;
        let fname = row.insertCell(1);
        fname.innerHTML = patient.firstName;
        let middleName = row.insertCell(2);
        middleName.innerHTML = patient.middleName;
        let lastName = row.insertCell(3);
        lastName.innerHTML = patient.lastName;
        let dob = row.insertCell(4);
        dob.innerHTML = patient.dob;
        let department = row.insertCell(5);
        department.innerHTML = patient.department;
        let opatient = row.insertCell(6);
        opatient.innerHTML =patient.outPatient;


       });
    })

    const elderly = document.getElementById("elderly");
    elderly.addEventListener("change",(event)=>{
        event.preventDefault();
        table.innerHTML="";
        if(elderly.checked){
        patients.filter(patient=> patient.outPatient == "No").map(
            patient=>{
                let row = table.insertRow();
                let pId = row.insertCell(0);
                pId.innerHTML = patient.patientId;
                let fname = row.insertCell(1);
                fname.innerHTML = patient.firstName;
                let middleName = row.insertCell(2);
                middleName.innerHTML = patient.middleName;
                let lastName = row.insertCell(3);
                lastName.innerHTML = patient.lastName;
                let dob = row.insertCell(4);
                dob.innerHTML = patient.dob;
                let department = row.insertCell(5);
                department.innerHTML = patient.department;
                let opatient = row.insertCell(6);
                opatient.innerHTML =patient.outPatient;
            }
        );
        }else{
            patients.map(
                patient=>{
                    let row = table.insertRow();
                    let pId = row.insertCell(0);
                    pId.innerHTML = patient.patientId;
                    let fname = row.insertCell(1);
                    fname.innerHTML = patient.firstName;
                    let middleName = row.insertCell(2);
                    middleName.innerHTML = patient.middleName;
                    let lastName = row.insertCell(3);
                    lastName.innerHTML = patient.lastName;
                    let dob = row.insertCell(4);
                    dob.innerHTML = patient.dob;
                    let department = row.insertCell(5);
                    department.innerHTML = patient.department;
                    let opatient = row.insertCell(6);
                    opatient.innerHTML =patient.outPatient;
                }
            );
     
        }
    });

}