const elHamburger = document.querySelector(".header__section-hamburger");
const elNavList = document.querySelector(".header__nav-list")

elHamburger.addEventListener("click", () => {
  elHamburger.classList.toggle("active");
  elNavList.classList.toggle("active");
})

document.querySelectorAll(".header__nav-link").forEach(n => n.addEventListener("click", () => {
  elHamburger.classList.remove("active");
  elNavList.classList.remove("active");
}))