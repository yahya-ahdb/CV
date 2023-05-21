const header = document.getElementById("header")
const btn = document.getElementById("btnToggle")
const landing = document.getElementById("landing")

setTimeout(()=>{
    landing.style.display = "none"
},7000)

btn.onclick = function (){
    header.classList.toggle("active")
}
