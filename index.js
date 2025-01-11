let starsContainer =  document.getElementById("stars-container")

document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.getElementById("stars-container");
    const starCount = 5; 

    for (let i = 0; i < starCount; i++) {
        const img = document.createElement("img");
        img.src = "./svg/star.svg";
        img.alt = "Star";
        starsContainer.appendChild(img);
    }
});
