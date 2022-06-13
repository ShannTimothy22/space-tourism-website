const hamburger = document.querySelector(".icon-hamburger");
const sidebar = document.querySelector(".side-nav");
const close = document.querySelector(".icon-close")

hamburger.addEventListener("click",()=>{
    sidebar.classList.remove("close");
})

close.addEventListener("click",()=>{
    sidebar.classList.add("close");
})
