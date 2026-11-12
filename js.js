

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});




const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});




const elements = document.querySelectorAll(
    ".section, .download-section"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(element => {

    observer.observe(element);

});




const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 10, 16, 0.96)";

    } else {

        header.style.background =
            "rgba(11, 15, 25, 0.85)";

    }

});




const downloadButton =
    document.querySelector(".download-button");

downloadButton.addEventListener("click", () => {


    console.log(
        "Download do simulador iniciado."
    );

});
