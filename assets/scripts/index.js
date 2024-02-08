const HEADER_BUTTON = document.querySelector(".header-menu");
const HEADER_NAV = document.querySelector(".header-nav");

HEADER_BUTTON.addEventListener("click", toggleHeaderButton);

function toggleHeaderButton() {
  if (HEADER_BUTTON.classList.contains("menu-active")) {
    HEADER_BUTTON.classList.remove("menu-active");
    HEADER_NAV.classList.remove("header-nav-active");
  } else {
    HEADER_BUTTON.classList.add("menu-active");
    HEADER_NAV.classList.add("header-nav-active");
  }
}
