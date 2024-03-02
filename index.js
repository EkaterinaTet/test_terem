const title = document.querySelector("h1");
const buttonOne = document.querySelector(".btn-warning");

const buttonTwo = document.querySelector(".btn-success");
const blockMiddle = document.querySelector(".block_middle");
const elem1 = document.querySelector(".block_elem1");
const elem2 = document.querySelector(".block_elem2");

const popupClose = document.querySelector(".popup_close");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup_content");

buttonOne.addEventListener("click", () => {
  title.style.display = title.style.display == "none" ? "block" : "none";
});

let isSwappedPlaces = false;
buttonTwo.addEventListener("click", () => {
  if (!isSwappedPlaces) {
    blockMiddle.insertBefore(elem2, elem1);
  } else {
    blockMiddle.insertBefore(elem1, elem2);
  }
  isSwappedPlaces = !isSwappedPlaces;
});

const closePopup = () => {
  popup.style.display = "none";
  popupContent.style.display = "none";
};

popupClose.addEventListener("click", () => {
  closePopup();
});

document.addEventListener("click", (event) => {
  if (!popupContent.contains(event.target)) {
    closePopup();
  }
});
