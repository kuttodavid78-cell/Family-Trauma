document.addEventListener("DOMContentLoaded", () => {

    const scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) return; // Safety check

    const toggleButton = () => {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    window.addEventListener("scroll", toggleButton);

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});