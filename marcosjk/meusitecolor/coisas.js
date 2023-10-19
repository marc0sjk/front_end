
let button = document.getElementById("darklight")
let body = document.querySelector("body")

console.log(button)
button.addEventListener("click",()=> {
     body.classList.toggle("dark")
})