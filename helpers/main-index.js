window.addEventListener("DOMContentLoaded", () => {
    const mainText = document.querySelector("#main-article")
    
    

    if ( screen.width < 992) {
        mainText.classList.add("w-100")
        
    } else {
        mainText.classList.remove("w-100")
        

        mainText.classList.add("w-50")
        
    }

})

window.addEventListener("resize", () => {
    const mainText = document.querySelector("#main-article")
    

    if ( screen.width < 992) {
        mainText.classList.add("w-100")
        

    } else {
        mainText.classList.remove("w-100")

        mainText.classList.add("w-50")
    }

})