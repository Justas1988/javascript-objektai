// 2. Susikurti objektų masyvą:
// * Masyve 100 objekto elementų.
// * Objekto vidiniai kintamieji: id, vardas.
// * Vardas reikšmė = vardas1,vardas2 ir t.t.  
// * Id reikšmė = 1, 2 ir t.t.
// Papildomai:
// Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas. Kas antras div - mėlynas.

"use strict";
document.getElementById("start").addEventListener("click", function() {

const mass = [];
const objektas = {};
for (let i=0; i<100; i++) {
    objektas[i+1] = {
        id: i+1,
        vardas: "vardas"+[i+1]
                    }                    
    mass[i] = objektas[i+1];

    console.log(mass[i]);  

    let divElementas = document.createElement("div"); 
    divElementas.classList.add("div-dydis");
    divElementas.innerText = "Vardas: " + mass[i].vardas + " " + "ID: " + mass[i].id; 
    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("zalias");
    }
    document.querySelector(".container").append(divElementas);
                

}
});
