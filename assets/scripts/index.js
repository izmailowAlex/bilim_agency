const HEADER = document.querySelector(".header");
const HEADER_BUTTON = document.querySelector(".header-menu");
const LOGO = document.querySelector(".logo");
const SERVICES_LIST = document.querySelectorAll(".services-item");

HEADER_BUTTON.addEventListener("click", handleToggleHeaderButton);
SERVICES_LIST.forEach((item) => {
  item.addEventListener("click", () => {
    cleanActiveInItem();
    addActiveInItem(item);
  });
});

function handleToggleHeaderButton() {
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

function cleanActiveInItem() {
  SERVICES_LIST.forEach((item) => {
    if (item.classList.contains("services-item-active")) {
      item.classList.remove("services-item-active");
    }
  });
}

function addActiveInItem(item) {
  item.classList.add("services-item-active");
}
