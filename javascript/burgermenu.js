const burgerIcon = document.querySelector("#xmark-nav") //vi bruger ID her så vi ik ender op med at de to javascripts og classes går ind over hindanden
console.log(burgerIcon)
const burgerMenu = document.querySelector("nav ul")
const menuItems = burgerMenu.querySelectorAll("li")


//for each gør at vært element får en kommando som står i "{}"
menuItems.forEach(element => {
    element.addEventListener("click", showHideMenu)
});


//burger icon reagere på click 
burgerIcon.addEventListener("click", showHideMenu)


function showHideMenu() {
    console.log(this)
    if (window.innerWidth < 588)



        // hvis burger iconet  er vist (som den er i media queries til at starte med) så bliver menuen skjult 
        if (burgerMenu.style.display === "grid")
        
        {
            // funktion som skjuler "ul" og skifter burger iconet til et "X"
            burgerMenu.style.display = "none"
            burgerIcon.classList.remove("fa-xmark")
            burgerIcon.classList.add("fa-bars")
        }



//vis ik den er skjult (som den er vis den er blevet klikket en gang) så bliver den vist
        else {

            burgerMenu.style.display = "grid"
            burgerIcon.classList.add("fa-xmark")
            burgerIcon.classList.remove("fa-bars")
        }

}
//vis bredden  er større end 700px så bliver "burger menu " vist




window.addEventListener("resize", updateBurgerMenu)

function updateBurgerMenu() {
    if (window.innerWidth > 588) {
        burgerMenu.style.display = "grid"

    }
    // vis ik den er 700px bliver Menuen ik Vist
    else {
        burgerMenu.style.display = "none"
        burgerIcon.classList.remove("fa-xmark")
        burgerIcon.classList.add("fa-bars")
    }
}