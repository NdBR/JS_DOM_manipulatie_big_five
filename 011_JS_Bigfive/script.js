// eerst buttuns selecteren uit de dom
const buttonsBigFive = document.querySelectorAll(".big-five-button")
console.log(buttonsBigFive)
const animalList = document.getElementById("spotted-animals-list")

// functie die gecalled word wanneer clicked on

const animalsSpotted = (event) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = event.target.innerHTML;
    console.log(newLi)
    animalList.appendChild(newLi);
}

buttunsBigFive.forEach((btn) => {
    btn.addEventListener("click", (event) => animalsSpotted(event));
})
// eerste element weghalen
buttonRemoveFirstElement.addEventListener("click", function (event) {
    const firstElement = animalList.firstElementChild
    firstElement.remove()
})

// verwijderen van alle elementen

buttonRemoveAll.addEventListener("click", () => {
    animalList.querySelectorAll("li").forEach(spottedAnimal => spottedAnimal.remove());
});
