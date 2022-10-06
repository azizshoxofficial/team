console.log("Js is started");
const h1 = document.querySelector(".title")
const btn = document.querySelector(".btn")

let count = 0
btn.addEventListener('click', ()=>{
    count++
    h1.innerHTML = count
})

