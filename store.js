const signUp = document.querySelectorAll(".sign-up");
const signIn = document.querySelectorAll(".sign-in");
const change = document.querySelectorAll(".other-con");
signUp.forEach((signUp, index) => {
  signUp.addEventListener("click", () => {
    change[index].classList.add("swap");
  });
});
signIn.forEach((signIn, index) => {
  signIn.addEventListener("click", () => {
    change[index].classList.remove("swap");
  });
});

const coverBackground = document.querySelector(".head");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    coverBackground.classList.add("cover-up");
  } else {
    coverBackground.classList.remove("cover-up");
  }
});

const interest = document.querySelectorAll(".interest");
const price = document.querySelectorAll(".price-tag");
const closed = document.querySelectorAll(".close");
const image = document.querySelectorAll(".image");

interest.forEach((interest, index) => {
  interest.addEventListener("click", () => {
    price[index].classList.add("o-price");
    image[index].classList.add("shift");
    interest.innerHTML = "";
  });
});

closed.forEach((closed, index) => {
  closed.addEventListener("click", () => {
    price[index].classList.remove("o-price");
    image[index].classList.remove("shift");
    interest[index].innerHTML = "interested";
  });
});

///cart javascript
//carousel from owl libraries

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
