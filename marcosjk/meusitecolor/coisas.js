
let button = document.getElementById("darklight")
let body = document.querySelector("body")
let th = document.querySelectorAll("th")
button.addEventListener("click",()=> {
     body.classList.toggle("dark")
     body.classList.toggle("dtab")
})