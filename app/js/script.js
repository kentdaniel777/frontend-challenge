const btnHamburger= document.querySelector("#btnHamburger");
const body= document.querySelector("body");
const header= document.querySelector(".header");
const overlay=document.querySelector(".overlay");
const mobileMenu=document.querySelector("#mobileMenu");

// update header when hamburger is clicked
btnHamburger.addEventListener("click", function(){
    if (header.classList.contains("open")){// close 
        body.classList.remove("noscroll")
        header.classList.remove("open");

        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");

        mobileMenu.classList.add("has-fade")
    }else{
    
        header.classList.add("open");// open
        body.classList.add("noscroll")
        if (overlay.classList.contains("fade-out")){// overlay
            overlay.classList.remove("fade-out");
        }
        overlay.classList.add("fade-in");
        if (mobileMenu.classList.contains("has-fade")){// mobileMenu
            mobileMenu.classList.remove("has-fade")
        }
        
    }
})