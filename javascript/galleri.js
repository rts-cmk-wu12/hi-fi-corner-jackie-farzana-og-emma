const slides = document.querySelectorAll(".slide")
const caption = document.querySelectorAll(".caption")
const prev = document.querySelector("#back").addEventListener("click", skiftSlide);
const next = document.querySelector("#next").addEventListener("click", skiftSlide);
let current = 0;

caption.textContent = captionText;





function skiftSlide() {


    slides[current].classList.remove("slide--active");



    if (this.getAttribute("id") === "next") {
//vis id er next så får den +1 indtil den rammer det sidste element, vis den er mindre end -1(det sidste element) så bliver den til det første element
        current++;
        if (current > slides.length - 1) //(-1 er sidste element)
         {
            current = 0 //0 er det første element
        }
        slides[current].classList.add("slide--active");
    }
    else {
        //vis ik knappen har id "next" så bliver den til back og går 1 ned vis current(som er 0 )er større end 0 så går den en ned
        current--;
        if (current < 0) //0 er det første element
         {
            current = slides.length - 1; //(-1 er sidste element)
        }
        slides[current].classList.add("slide--active");
    }captionText = slides[current].getAttribute("alt")
    captionText = slides[current].getAttribute("alt")
    caption.textContent = captionText
    console.log(current)
}
