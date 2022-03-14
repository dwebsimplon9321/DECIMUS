// Calcul TVA
/**

let tva_clc1 = (250*8.5)/100;
let tva_clc2 = 250 + tva_clc1; 
let totl = tva_clc2
//console.log(totl);


let replc = document.querySelector("td.ttl")

console.log(replc)

replc.innerHTML = tva_clc2;
*/


const tvaDom = 8.50

let ss_total = document.querySelector("td.sstotal") 
console.log(ss_total);

let tva = document.querySelector("td.tva")
console.log(tva);


ss_t = ss_total.innerHTML;
console.log(ss_t)

tva_t = tva.innerText;
console.log(tva_t);


let tva_clc1 = (ss_t*tvaDom)/100;
console.log(tva_clc1);

let tva_clc2 = parseInt(ss_t)+ tva_clc1; 
console.log(tva_clc2);

let replc = document.querySelector("td.ttl");

replc.innerHTML = tva_clc2;
 




/**
let ss_total = document.querySelector("td.sstotal")

// recuperer le montant ht (sstotal.InnerHtml)

console.log(ss_total);
*/




let montantTVA = ss_t * tvaDom /100;


 

// mettre a jour element html de la facture

let tdTVa = document.querySelector("td.tva");
tdTVa.innerHTML = "$"+Number.parseFloat(montantTVA).toFixed(2);

let tdTotal = document.querySelector("td.ttl");
tdTotal.innerHTML = "$"+Number.parseFloat(tva_clc1).toFixed(2);

ss_total.innerHTML = "$"+ss_t;