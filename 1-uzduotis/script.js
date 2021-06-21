// 1. Papildyti paskaitoje aptartą skaičiuotuvo objektą:
// * Pridėti šaknies bei liekanos skaičiavimo metodus.
// * Metodas "rezultatas" išvedą rezultatų masyvą.
// * Papildyti objektą metodu, kuris išvedą visų metodo "rezultatas" masyvo elementų vidurkį.

"use strict";

document.getElementById("patvirtinti").addEventListener("click", function() {

    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);


    const skaiciuotuvas = {
    
        paleidimas: function(a,b) {
            this.sk1 = a;
            this.sk2 = b;
        },
    
        sudetis: function() {
            let suma;
            suma= this.sk1 + this.sk2;
            return suma;
        },
        atimtis: function() {
            let atimtis;
            atimtis= this.sk1 - this.sk2;
            return atimtis;
        },
    
        daugyba: function() {
            let daugyba;
            daugyba= this.sk1 * this.sk2;
            return daugyba;
        },
    
        dalyba: function() {
            let dalyba;
            dalyba= this.sk1 / this.sk2;
            return dalyba;
        },

        rooter: function() {
            let saknis1, saknis2;
            saknis1 = Math.sqrt(sk1);
            saknis2 = Math.sqrt(sk2);
            const mass = [saknis1, saknis2];
            return mass;
        },

        liekana: function () {
            let liek;
            liek = sk1 % sk2;
            return liek;
        },

        rezultatas: function () {
            const masyvas = [this.sudetis(),
                             this.atimtis(),
                             this.daugyba(),
                             this.dalyba(),
                             this.liekana(),
                             this.rooter()];
                
             return masyvas;             
        },

        vidurkis: function() { 
            let ilgis = this.rezultatas().length;
            let bendraSuma = 0;
            for (let i=0; i < ilgis-1; i++) { //ilgis - 1, tam kad nebandytu sudėti 6-tojo elemento, kuris yra masyvas
                bendraSuma = bendraSuma + this.rezultatas()[i];
             }
            let vid = (bendraSuma + this.rooter()[0] + this.rooter()[1]) / (ilgis + 1);
            return vid;
        },
    
        result: function() {
            console.log("Suma: " + this.sudetis());
            document.getElementById("sum").innerHTML = "Suma: " + this.sudetis();
            console.log("Atimtis: " + this.atimtis());
            document.getElementById("ati").innerHTML = "Atimtis: " + this.atimtis();
            console.log("Sandauga: " + this.daugyba());
            document.getElementById("san").innerHTML = "Sandauga: " + this.daugyba();
            console.log("Dalyba: " + this.dalyba());
            document.getElementById("dal").innerHTML = "Dalyba: " + this.dalyba();
            console.log("Šaknis: " + this.rooter());
            document.getElementById("sak").innerHTML = "Šaknis: " + this.rooter();
            console.log("Liekana: " + this.liekana());
            document.getElementById("liek").innerHTML = "Liekana: " + this.liekana();
            console.log("Rezultatų masyvas: ", this.rezultatas()); 
            document.getElementById("mas").innerHTML = "Rezultatų masyvas: " + this.rezultatas();
            console.log("Vidurkis: ", this.vidurkis());
            document.getElementById("vid").innerHTML = "Vidurkis: " + this.vidurkis();
            
        }
    };    
    
    skaiciuotuvas.paleidimas(sk1,sk2);
    skaiciuotuvas.result();



});