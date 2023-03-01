const signUp = document.querySelector("#sign-up");
const signIn = document.querySelector(".sign-in");
const change = document.querySelector(".other-con");
signUp.addEventListener("click", () => {
  change.classList.add("swap");
});
signIn.addEventListener("click", () => {
  change.classList.remove("swap");
});

const coverBackground = document.querySelector(".head");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    coverBackground.classList.add("cover-up");
  } else {
    coverBackground.classList.remove("cover-up");
  }
});
