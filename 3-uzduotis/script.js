// 3. Susikurti objektą "Kvadratas".
// Objektas turi priimti du kintamuosius: a ir b kraštines.
// Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
// Informaciją išvesti į <p> žymę. 

// Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas. 

"use strict";

document.getElementById("confirm").addEventListener("click", function() {
    let sk1 = parseFloat(document.getElementById("sk1").value);
    let sk2 = parseFloat(document.getElementById("sk2").value);


const kvadratas = { //bet gali būti ir stačiakampis :))

    plotas: function(a, b) {
        let plot = a*b;
        return plot;
    },

    perimetras: function(a, b) {
        let per = 2*a + 2*b;
        return per;
    },

    istrizaine: function(a, b) {
        let istr = Math.sqrt(a*a + b*b);
        return istr;
    },

    res: function(a, b) {
        document.getElementById("ats").innerHTML = "Stačiakampio įstrižainė: " + Math.round(this.istrizaine(a, b)*100)/100 + " Stačiakampio perimetras: " + Math.round(this.perimetras(a, b)*100)/100 + " Stačiakampio plotas: " + Math.round(this.plotas(a, b)*100)/100;
    }
}

    kvadratas.res(sk1, sk2);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(5, 5, sk1, sk2);

});