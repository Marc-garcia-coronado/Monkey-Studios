window.addEventListener("scroll", function(){
    const nav = document.querySelector("#main-nav")
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY)
    nav.classList.toggle("sticky", window.scrollY)
    nav.classList.remove("border-top", window.scrollY)
    
})