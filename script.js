//On cible la <div> qui contient le bouton
const dark = document.getElementById("dark");
const body = document.body;
let theme;

//Evenement au click
dark.addEventListener("click", () => {
  body.classList.toggle("darkBody"); //Toggle veux dire ajouter ou supprimer la class du body.
  if (body.classList.contains("darkBody")) { // Si le body contient la classe darkBody
    theme = localStorage.setItem("theme", 1); // alors le theme sera 1 dans le localStorage
  } else {
    theme = localStorage.setItem("theme", 0); // sinon le theme sera 0 dans le localStorage
  }
});

if (
  localStorage.getItem("theme") == 1 &&  //SI le theme du localStorage est de 1 et que la class au body ne contient pas la class darkBody 
  !body.classList.contains("darkBody")
) {
  body.classList.add("darkBody");       // Alors on ajoute la class au body
}
