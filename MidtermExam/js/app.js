'use strict'
window.onload=function(){
    const censusForm=document.getElementById("censusForm");
    censusForm.addEventListener("submit",event=>{
        event.preventDefault();


        const fullName = document.getElementById("fullName");
        const address = document.getElementById("address");
        const accountNumber = document.getElementById("accountNumber");
        const typeofAccount = document.getElementById("typeofAccount");
        
        
        alert(`
        fullName: ${fullName.value}
        address: ${address.value},
        accountNumber: ${accountNumber.value}
        typeofAccount: ${typeofAccount.value}

    `);
    

    fullName.value = "";
    address.value = "";
    accountNumber.value = "";
    typeofAccount.value = "";

    })
}
