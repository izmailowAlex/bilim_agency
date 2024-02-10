const HEADER = document.querySelector(".header");
const HEADER_BUTTON = document.querySelector(".header-menu");

HEADER_BUTTON.addEventListener("click", toggleHeaderButton);

function toggleHeaderButton() {
  if (HEADER.classList.contains("header-active")) {
    HEADER.classList.remove("header-active");
  } else {
    HEADER.classList.add("header-active");
  }
}
