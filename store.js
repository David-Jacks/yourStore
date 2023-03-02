const signUp = document.querySelectorAll(".sign-up");
const signIn = document.querySelectorAll(".sign-in");
const change = document.querySelectorAll(".other-con");
signUp.forEach((signUp, i) => {
  signUp.addEventListener("click", () => {
    change[i].classList.add("swap");
  });
});
signIn.forEach((signIn, i) => {
  signIn.addEventListener("click", () => {
    change[i].classList.remove("swap");
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
// interest.addEventListener("click", () => {
//   price.classList.add("o-price");
//   image.classList.add("shift");
//   document.querySelector(".interest").innerHTML = " ";
// });

// closed.addEventListener("click", () => {
//   price.classList.remove("o-price");
//   image.classList.remove("shift");
//   document.querySelector(".interest").innerHTML = "interested";
// });
