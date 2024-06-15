const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variables
let i = 0
let bannerImg = document.querySelector(".banner-img")
let tagLines = document.querySelector("#banner p")
let dot = document.querySelectorAll(".dot")


//fonction pour les changements images, texte et bullet points
function modifierSlide() {
	bannerImg.src = slides[i].image
	tagLines.innerHTML = slides[i].tagLine

	let dotSelected = document.querySelector(".dot_selected")
	dotSelected.classList.remove("dot_selected")
	dot[i].classList.add("dot_selected")
}

//écouter les clics sur les flèches
let flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", () => {
	console.log("vous avez cliqué sur la flèche gauche")
	i--
	if (i<0){
		i=slides.length-1
	}
	modifierSlide()
})

let flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {
	console.log("vous avez cliqué sur la flèche droite")
	i++
	if (i>=slides.length){
		i=0
	}
	modifierSlide()
})



