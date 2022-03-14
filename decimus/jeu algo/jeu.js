function devineMoi(min, max){
    // generateur aleatoire javascript
    return Math.floor(Math.random() * max) + min;
}
let resultat = devineMoi(1, 150);


// alert(resultat);

// generer nombre aleatoire entre 1 et 15
function essai(min, max){
    // nombre essai
    return Math.floor(Math.random()* max) + min;
}
let nbrE = essai(1, 15);
let tour = 0;

// afficher nbre dans le jeux
let spanE = document.querySelector("span.essais");
spanE.innerHTML = nbrE;

// ecouteur sur le bouton 'reponse'
let bt = document.querySelector("button");
bt.addEventListener("click", function(){
    let reponse = document.querySelector("input#reponse");
    
    // comparer reponse et resultat
    if(reponse.value == resultat){

        //afficher message gagnant
        let win = document.querySelector(".reponse");
        win.innerHTML = "YOU WIN !!!";

    } else {
        console.log("non, le bon nombre est :"+resultat);

        // recuperer nbr essai
        tour += 1;

        if( tour === nbrE ){
            console.log("perdu");
        } else {
            console.log("essai encore")
        }

    }

});
