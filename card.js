document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");

    function createStars() {
        for (let i = 0; i < 20; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            card.appendChild(star);

            // Delay animation start to make the twinkling effect smooth
            setTimeout(() => {
                star.style.animation = `twinkle ${1 + Math.random()}s infinite ease-in-out`;
            }, Math.random() * 500);
        }
    }

    function removeStars() {
        document.querySelectorAll(".star").forEach(star => star.remove());
    }

    card.addEventListener("mouseenter", createStars);
    card.addEventListener("mouseleave", removeStars);
});
