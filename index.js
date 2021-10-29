//Image fading out 

const imageArr = ['assets/employee-8-removebg-preview.png', 'assets/hero.png'];
const heroImage = document.getElementById("hero-img")

heroImage.className = 'fade-in'
const imageTransition = ()=>{    
    heroImage.src = imageArr[0]
}
setInterval(imageTransition, 3000)




// Quote fading out

const quote = document.getElementById('quote')
let q1 = quote.textContent
let q2 = `If you want to tell people the truth, make them laugh for your life in his world, otherwise they'll kill you.`
const quoteArr = [q1, q2]
quote.className = 'fade-in'
const quoteTransition = ()=>{    
    quote.textContent = quoteArr[1]
}
setInterval(quoteTransition, 3000)




// mobile menu list functions

let menu = document.getElementById("navbar");
let header = document.getElementById("header");
let hero = document.querySelector('.hero')

function toggle(){
    header.style.height = "500px";
    menu.className = "menu";
} 
function collapseMenu(){
    header.style.height = "85px";
    menu.className = "navbar";
}
hero.addEventListener("click", ()=>{
    header.style.height = "85px";
    menu.className = "navbar";
})
