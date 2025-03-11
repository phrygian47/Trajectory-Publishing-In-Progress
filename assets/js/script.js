// Hamburger Slider
const hamburger = document.querySelector(".nav__hamburger");
const itemsContainer = document.querySelector(".nav__navbar");
const items = document.querySelectorAll(".nav__navbar__item");

// About Section Image Slider
const slide = document.querySelector(".slide");
const sliderImages = document.querySelectorAll(".slide img");

// Slider Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Slider
let counter = 1;
let size = sliderImages[0].clientWidth;

const updateSize = () => {
  size = sliderImages[0].clientWidth;
  slide.style.transition = "none";
  slide.style.transform = "translateX(" + -size * counter + "px)";
};

const closeMenu = () => {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      itemsContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
};

hamburger.addEventListener("click", () => {
  itemsContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-width: 768px)").matches) {
  closeMenu();
}

window.addEventListener("resize", updateSize);
window.addEventListener("load", () => {
  updateSize();
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

nextBtn.addEventListener("click", () => {
  if (counter >= sliderImages.length - 1) return;
  slide.style.transition = "transform 0.9s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.9s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

slide.addEventListener("transitionend", () => {
  if (sliderImages[counter].id === "lastClone") {
    slide.style.transition = "none";
    counter = sliderImages.length - 2;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (sliderImages[counter].id === "firstClone") {
    slide.style.transition = "none";
    counter = sliderImages.length - counter;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
