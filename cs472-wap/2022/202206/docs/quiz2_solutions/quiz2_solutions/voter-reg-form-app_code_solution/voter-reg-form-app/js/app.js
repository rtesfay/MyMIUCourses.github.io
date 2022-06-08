/**
 * app.js
 */
"use strict";

// console.log("voter log");

window.onload = function() {
    const voterForm = document.getElementById("voterForm");
    voterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const voterNo = document.getElementById("voterNo").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const levelOfStudy = document.getElementById("levelOfStudy").value;
        alert(`
            Voter Number: ${voterNo}
            First Name: ${firstName},
            LastName: ${lastName}
            Level of study: ${levelOfStudy}
        `)
    });
}