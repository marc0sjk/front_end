
let button = document.getElementById("darklight")
let fundopag = document.querySelector("body")
let dtbcat = document.querySelectorAll("th.tabcateg")
let dinftab = document.querySelectorAll("th.tabinfo")
let titum = document.querySelectorAll("h1.titulos")
let titu = document.querySelectorAll("h2.titulos")
let parag = document.querySelectorAll("p")
let imgbord = document.getElementById("roundimg")
button.addEventListener("click",()=> {
     fundopag.classList.toggle("dark")
     imgbord.classList.toggle("dimgborder")
     dtbcat.forEach((coisa) =>{
          coisa.classList.toggle("dtab")
     })
     dinftab.forEach((element) => {
          element.classList.toggle("dtab")
     })
     titum.forEach((h1) => {
          h1.classList.toggle("dtitle")
     })
     titu.forEach((h2) => {
          h2.classList.toggle("dtitle")
     })
     parag.forEach((p) => {
          p.classList.toggle("dtab")
     })
})