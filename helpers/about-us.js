window.addEventListener("scroll", function(){
    const ballText = document.querySelector(".ball-text")
    const header = document.querySelector("header")

    if ( window.scrollY < 479 ) {
        ballText.classList.remove("desaparecer")
        ballText.classList.add("d-none")

    }else if ( window.scrollY > 479 && window.scrollY < 999 ){
        ballText.classList.remove("d-none")
        ballText.classList.remove("desaparecer")

    }else if ( window.scrollY > 1000 ) {

        ballText.classList.add("desaparecer")
    }
    
    


    if ( window.scrollY < 1480 ) {
        header.classList.add("d-none")
    } else {
        header.classList.remove("d-none")
    }

})

window.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header")

    if ( screen.width < 992 ) {
        header.classList.remove("d-none")
    } else {
        header.classList.add("d-none")
    }
})