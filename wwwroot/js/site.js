"use strict";

// Vänta tills hela sidan har laddats
document.addEventListener("DOMContentLoaded", function () {

    // Hämta knapp från DOM
    const scrollBtn = document.getElementById("scroll-btn");

    // Lägg till händelselyssnare för scrollhändelser
    window.addEventListener("scroll", function () {
        // Om scrollpositionen är större än 100px, visa knappen, annars dölj den
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scrolla tillbaka till toppen när knappen klickas med smooth scroll
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
