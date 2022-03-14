
/*
// C'est un commentaire

// Variable

// Question : Comment on déclare une variable ?
let a = ''; // let a = 0;
const b = ''; // const b = 0;

// Questions : Comment affecter une chaine de caractère à une variable ?
let c = 'Bonjour les gens !';

// Question : Comment changer une valeur dans une variable ?
c = 'Bonjour la DWEB !!!';

// Question : Comment vérifier le contenu d'une variable ?
alert(c);


// QUestion : De quoi avons-nous besoin pour faire une addition ?
let d = 5 + 6;

let e = 5; let f = 6;
let total = e + f;

// Questions : De quoi avons nous besoin pour une concaténation ?

let section = "DWEB";

let salutation = "Bonjour ";
alert(salutation+section);

// exercice
/**
 * -Créer 5 variables 3 numérique et 2 avec les chaines de caractères suivante
 * *Le total est: "
 * -Vous devez mettre en place une division, une multiplication, une soustration et une addition
 * avec des chiffres différents et afficher pour chaque opération une alerte avc le résultat.
 */

/** 
const le_total = "Le total "

const est = "est: "

let num_1 = 0;

let num_2 = 0;

let num_3 = 0;

// division

num_2 = 129;
num_1 = 3;

let divs =  le_total + est + (num_2/num_1)
let calcul = "129/3 "
alert(calcul+divs)

// multiplication

num_1 = 13;
num_3 = 3;

let multi = le_total +"de 12*3 "+ est + (num_1*num_3)
alert(multi)

// soustration 

num_2 = 20304;
num_3 = 12034;

let sous = le_total +"de 20304-12034 "+ est + (num_2-num_3)
alert(sous)

// addition

num_2 =  333;
num_1 = 333;

let addit =  le_total +"de 333+333 "+ est + (num_2+num_1)
alert(addit)


let cmplx = le_total + est + ((num_1+num_2+num_3)+(num_2-num_3/num_1)/(num_1*num_3-num_1)*(num_2+num_1))
alert(cmplx)
*/

// Question : Comment changer le contenu d'un élément html
// Identifier element html h1

let bh1 = document.querySelector("h1");

bh1.innerHTML = "Bienvenue LA DWEB";

//Question : Comment changer le contenu d'un élément html et l'affecter dans un autre element
// Identifier élement html h2
let bh2 = document.querySelectorAll("h2");

// Identifier le 2ème element h2 et changer sont contenu

bh2[1].innerHTML = "Section en avant";

// affecter contenu du 2ème h2 dans h3

let bh3 = document.querySelector("h3")

let changeH2 = bh2[1].innerHTML = "Merci beaucoup"

bh3.innerHTML = changeH2;


let bh2s = document.querySelector("h2.ssh2");

bh2s.innerHTML = "Benjamin mal de tête";

// console.log(bh2s);

// exercice
/**
 * Créer la variable 'paragraphe' puis recuperer l'element html p et ajouter le contenu suivant :
 * 'La DWEB est en vacance à partir du 1er mars 2022'
 */


let prgh = document.querySelector("p");

prgh.innerHTML = "La DWEB est en vacance à partir du 1er mars 2666"

// console.log(prgh)

// Question : Comment ajouter un element html en javascript ?
// Dans la div.info, ajouter un element html
// Cibler element parent 


let divI = document.querySelector("div.info");

// console.log(divI);

// Création nouveau paragraphe

let phtml = document.createElement("p");

let ptext = document.createTextNode("La DWEB maitrise javascript.");

// ajouter texte dans la balise html p

phtml.appendChild(ptext);

// ajouter le paragraphe dans la div.info

divI.append(phtml);

//console.log(phtml);

// Comment poser une question ?
//window.prompt("Poser une question");

// Comment recuperer une reponse à une question ?
//let reponse = document.querySelector("p.r");
// reponse.innerHTML = prompt("Comment va la DWEB ce matin ?");

// Exercice
/**
 * Questionnaire
 * Poser les questions correspondant aux textex des paragraphes présent dans la division
 * 'div.form' 
 * Afficher pour chaque parapgraphe les reponses.
 * option : Mettre en majuscule le NOM et la ville
 */



//Nom
/** 
let nom = document.querySelector("p.nom")
const Nom = "Nom: "
nom.innerHTML = Nom + prompt("Nom") 


let prenom = document.querySelector("p.prenom")
const Prenom = "Prénom: "
prenom.innerHTML = Prenom + prompt("Prenom")


let sexe = document.querySelector("p.sexe")
const Sexe = "Sexe: "
sexe.innerHTML = Sexe + prompt("Sexe")


let ddn = document.querySelector("p.ddn")
const Ddn = "Date de naissance: "
ddn.innerHTML = Ddn+ prompt("Date de naissance")

let ldn = document.querySelector("p.ldn")
const Ldn = "Lieux de naissance: "
ldn.innerHTML = Ldn + prompt("Lieux de naissance")

let adrs = document.querySelector("p.adrs")
const Adrs = "Adresse: "
adrs.innerHTML = Adrs + prompt("Adresse")

let cp = document.querySelector("p.cp")
const Cp = "Code postal: "
cp.innerHTML = Cp + prompt("Code postal")

let city = document.querySelector("p.city")
const City = "Ville: "
city.innerHTML = City + prompt("Ville")
*/

//let dform = document.querySelector("div.form");

//dform.children[0].append(" "+prompt("Nom ?").toUpperCase());


// Question : Comment verifier le contenu si une variable est vide ou pas ?

let myName = "";

if(myName != ""){
    //alert("pas vide");
} else if(myName == ""){
    //alert("C'est vide");
}


// Question : Comment stocker les 6 mois de l'annee dans une variable ?
let annee = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
//console.log(annee[2]);

// Compter le nombre d'element d'un tableau
let nbrAnnee = annee.length;


// boucle for

// on commence à compter a partir de 0

//console.log(annee.length);

// Si i est plus petit que nbrAnnee alors ajoute a i +1
for(let i = 0; i < nbrAnnee; i++) {
    //nbr
    //afficher tout les mois
    //console.log(annee[i]);


    // afficher le mois de mars manuellement 
    //console.log(annee[2]);
    /*
    // pour afficher 1 fois le mois de mars
    if(annee[i] == "Mars"){
        console.log(annee[i]);
    }
*/
}               
/** 
// autre boucle
annee.forEach(mois => {
    //console.log(mois);

    if(mois == "Aout") {
        let message = "BENJAMIN est né au mois :"+mois;

        alert(message);
    }
});
*/

// Question : Comment mettre en place automatiquement ...
// afficher un nom dans un element html vide
/** 
function afficheNom(){
    let dA = document.querySelector("div.afficher");
    
    //dA.children[0].innerHTML = "Nohan";
    //console.log(dA)
    dA.children[0].innerHTML = prompt('Quel est votre prénom ?')
    return dA;
}
*/
// executer function afficheNom
//afficheNom();

// Question : Comment creer une horloge numerique
// Question : Comment rendre l'horloge dynamaique

function afficheHeure(){
    //recuperer element html
    let divA = document.querySelector("div.afficher")

    //recuperer et ecrire dans paragraphe
    divA.children[0].innerHTML = "Afficher heure";

    // creer un objet Date
    let objDate = new Date();

    /**
     * heure = gethours
     * minute = getMinutes
     * secondes = getSeconds
    */

    divA.children[0].innerHTML = objDate.getHours()+":"+objDate.getMinutes()+":"+objDate.getSeconds();

    //renvoi resultat
    return divA;
}

// executer afficheHeur
afficheHeure();