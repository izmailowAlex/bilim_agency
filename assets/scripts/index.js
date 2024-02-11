const HEADER = document.querySelector(".header");
const HEADER_BUTTON = document.querySelector(".header-menu");
const LOGO = document.querySelector(".logo");

HEADER_BUTTON.addEventListener("click", toggleHeaderButton);

function toggleHeaderButton() {
  if (HEADER.classList.contains("header-active")) {
    HEADER.classList.remove("header-active");
    if (LOGO !== null && LOGO.classList.contains("unactive")) {
      LOGO.classList.remove("unactive");
    }
  } else {
    HEADER.classList.add("header-active");
    if (LOGO !== null) {
      LOGO.classList.add("unactive");
    }
  }
}
