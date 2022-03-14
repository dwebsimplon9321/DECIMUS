/**
 * Mise en place api pokemon
 */

// balise html
const listePU = document.querySelector("ul.liste-poke");

// nbr dynamique de poke
const nbrPoke = 201;
// tableau de datas
let allPokemon = [];
let tableauFin = [];
let cpTab = [];

/* appel API pokemon */
function findPoke(){

    // url api pokemon
    fetch("https://pokeapi.co/api/v2/pokemon?limit="+nbrPoke)
        .then( reponse => reponse.json() )
        .then((allPoke => {
            //console.log(allPokemon);

            allPoke.results.forEach(pokemon => {

                // function pour affichage info complete
                fullInfoPoke(pokemon)
            });
        }))

}

// executer la commande
findPoke();

// info sur 1 pokemon
function fullInfoPoke(iPokemon){


    let objetPokeFull = {}; // format json vide

    let urlPoke = iPokemon.url;
    let namePoke = iPokemon.name;

    //console.log(urlPoke);

    //recupere infromation sur un poke
    fetch(urlPoke)

        // reponse appel sur urlPoke
        .then(reponse => reponse.json()) //sortie format json
        .then(( dataPoke => {

            //console.log(dataPoke);

            // recuperer info que je souhaite
            /**
             * . name
             * . sprites (images)
             * . son id (identifiant)
             */

            objetPokeFull.nom = dataPoke.name;
            objetPokeFull.id = dataPoke.id;
            objetPokeFull.imgF = dataPoke.sprites.front_default; // devant
            objetPokeFull.imgB = dataPoke.sprites.back_default; // arrière
            //console.log(objetPokeFull);

            // recuperer info sur la couleur du pokemon
            /**
             * ulr : https://pokeapi.co/api/v2/pokemon-species/1/
             * - id du pokemon
             */

            fetch("https://pokeapi.co/api/v2/pokemon-species/"+dataPoke.id)
                .then(reponse => reponse.json())
                .then( ( dataPoke => {

                    //console.log(dataPoke);
                    // recuperer couleur du pokemon
                    /**
                     * . color.name = la couleur
                     * . name[4].name = nom en français des pokes
                     */

                    objetPokeFull.couleur = dataPoke.color.name;
                    objetPokeFull.nomF = dataPoke.names[4].name;
                    //console.log(objetPokeFull);

                    // ajouter objetPOkeFull dans un tableau
                    allPokemon.push(objetPokeFull);

                    if(allPokemon.length === nbrPoke){
                        //console.log(allPokemon);

                        // trier les ids par ordre croissant
                        tableauFin = allPokemon.sort((a, b ) => {
                            return a.id - b.id;
                        });
                        //console.log(tableauFin)

                        // creation des cartes en html
                        createCard(tableauFin);
                    }


                }) )

        }))
}



// creer les cartes html
function createCard(tab){

    // lire contenu de la variable en paramettre tab

    for( let i=0; i < tab.length; i++){
        console.log(tab[i]);
    
        // carte = li avec les couleur
        const carte = document.createElement("li");
        let couleur = tab[i].couleur;

        carte.style.backgroundColor = couleur;
        
        // ajouter id du pokemon
        const idCarte = document.createElement("h3");
        idCarte.innerHTML = tab[i].id;

        // ajouter nom de pokemon

        const nomCarte = document.createElement("p");
        nomCarte.innerHTML = tab[i].nom;
        

        // ajouter image front du pokemon
        const frontCarte = document.createElement("img");
        //console.log(frontCarte);
        frontCarte.src = tab[i].imgF;
        frontCarte.setAttribute("alt", tab[i].nom);


        // ajouter les li
        
        carte.appendChild(idCarte);
        carte.appendChild(nomCarte);
        carte.appendChild(frontCarte);

        // ajouter Back image au rollhover sur li
        hoverLI(carte, tab[i].imgB, tab[i].imgF, frontCarte, nomCarte, tab[i].nomF, tab[i].nom);





        // ajouter dans ul les li
        listePU.appendChild(carte);

        console.log(tab);
    }
}

// ecouteur sur hover
function hoverLI(carteLi, urlImgB, urlImgF, image,paragraphe ,nomFr, nom){

    carteLi.addEventListener("mouseover", () =>{
        //console.log(image);
        image.src = urlImgB;
        //console.log(nomFr);
        paragraphe.innerHTML = nomFr
            
        /**  option 2 //reinitialisation de l'image
        setTimeout(() =>{
            img.src = urlImgF
        }, 1000)
        */
    });

    // option 1
    
    carteLi.addEventListener("mouseout", () =>{
        //console.log(image);

        image.src = urlImgF;
        paragraphe.innerHTML = nom;

    });
}

// scroll infini

window.addEventListener("scroll", () => {


    /**
     * scrollTop : difference entre ce que l'on a scroller depuis le haut de la page
     * scrollHeight : hauteur total
     * clientHeight : hauteur page actuel deja scrolle et visible
     */
    const { scrollTop, scrollHeight, clientHeight} = document.documentElement;

    //console.log(scrollTop, scrollHeight, clientHeight);

    if( clientHeight + scrollTop >= clientHeight - 20 ){
        addPoke(8);
    }

});

let index = 8;

// ajouter des cartes au scroll

function addPoke(nbrAddCarte){
    
    
    // test fin chargement des cartes totales
    if (index > nbrPoke){
        return;
    }
    
    // tableau pour ajouter les cartes de 8 en 8
    const tabtoAdd = allPokemon.slice(index, index+nbrAddCarte);
    

    // console.log(allPokemon.slice(0, 8));

    


    // ajouter tabToAdd au tableau existant
    createCard(tabtoAdd);

    

    // actualisation de l'index (8+8+8+8........=201)
    index += nbrAddCarte; // 8+8+8+.........
   
};

// animation label et input
const inputL = document.querySelector("input#find");
inputL.addEventListener("input", (e) => {

    // verifier si input video ou pas
    if (e.target.value !== ''){


        //console.log(e.target.parentNode.parentNode);
        /**
         * e = evenement
         * e.target = input
         * e.target.parentNode = div
         * e.target.parentNode.parentNode = form
         */
        e.target.parentNode.parentNode.classList.Add("active-input");

    } else if (e.target.value ===""){
        e.target.parentNode.parentNOde.classList.remove("active-input");
    }
});

// notre system de recherche pokemon
inputL.addEventListener("keyup", rechercher);

// function rechercher
function rechercher(){

    // ajouter tout les pokemons
    if(index < nbrPoke){
        addPoke(nbrPoke);
    }

    // 
    let filter, allLi, titleValue, allTitles;

    // mettre en minuscule
    filter = inputL.value.toLowerCase();
    
    // recupere toutes les cartes
    allLi = document.querySelectorAll("li");

    // recupere tout les titres
    allTitles = document.querySelectorAll("li > p");

    //
    for(let i=0; i < allLi.length; i++){

        // recupere chaque titre 
        titleValue = allTitles[i].innerHTML;

        //console.log(titleValue);

        // si recherche existe
        if(titleValue.toLocaleLowerCase().indexOf(filter) > -1){
    
            //affichage resultat
            allLi[i].style.display = "blok";

        } else {
            allLi[i].style.display = "none"
        }
    }
    
}
