const img = [
    "./assets/img/42ebf2e8554227cb053ee3c3733cb6db.jpeg",
    "./assets/img/2222.png",
    "./assets/img/42ebf2e8554227cb053ee3c3733cb6db.jpeg",
    "./assets/img/2222.png",
    "./assets/img/42ebf2e8554227cb053ee3c3733cb6db.jpeg",
    "./assets/img/2222.png",
    "./assets/img/42ebf2e8554227cb053ee3c3733cb6db.jpeg"
];

let currentIndex = 0;

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const sliderImage = document.getElementById("sliderImage");
const additionalimgContainer = document.querySelector(".additional-img");

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % img.length;
    updateSlider();
});

function updateSlider() {
    sliderImage.src = img[currentIndex];

    additionalimgContainer.innerHTML = "";

    for (let i = 1; i < img.length; i++) {
        const additionalImage = document.createElement("img");
        additionalImage.src = img[(currentIndex + i) % img.length];
        additionalImage.alt = "Resim " + (i + 1);
        additionalimgContainer.appendChild(additionalImage);
    }
}

updateSlider();
