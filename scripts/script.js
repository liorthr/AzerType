
//on affiche le score a l'aide la fonction
function afficherResultat(score, nombreMotsProposes) { 
    let spanScore = document.querySelector(".zoneScore span")

    let affichageScore = `${score}/${nombreMotsProposes}`

    spanScore.innerHTML = affichageScore
    console.log("votre score est de "+ score + " sur "+ nombreMotsProposes)
}

function afficherProposition(proposition) {
    let zonePropositionJs = document.querySelector(".zoneProposition")
    zonePropositionJs.innerText = proposition
}
//lancer le jeu 
function lancerJeu(){
    let score = 0
    let nombreMotsProposes = 0
    let i = 0
    listeProposition = listeMots

    let ButtonValidationJs = document.getElementById("btnValiderMot")
    let InputEcritureJs = document.getElementById("inputEcriture")
    ButtonValidationJs.addEventListener("click", () => { 
            console.log(InputEcritureJs.value)
            if (InputEcritureJs.value === listeProposition[i]){
                score += 1 
            } else {

            }

            i += 1
            afficherResultat(score, i)
            InputEcritureJs.value = ""

            if (listeProposition[i] === undefined){
                afficherProposition("Le jeu est fini")
                ButtonValidationJs.disabled = true
            } else {           
                afficherProposition(listeProposition[i])
            }
        
    })
    let choixUserPhrasesOuMots = document.querySelectorAll("input[type= radio]")
    for (let p = 0; p < choixUserPhrasesOuMots.length; p++) {
        choixUserPhrasesOuMots[p].addEventListener("change", (event)=>{
             console.log(event.target.value)
             if (event.target.value === "1"){
                listeProposition = listeMots
             } else {
                listeProposition = listePhrases
             }
             afficherProposition(listeProposition[i])
    })
}

let form = document.querySelectorAll("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let 

    
})

    afficherResultat(score, i)
}








