const title = document.querySelector("h1");
const buttonOne = document.querySelector(".btn-warning");

const buttonTwo = document.querySelector(".btn-success");
const elem = document.querySelector(".block_elem2");

const popupClose = document.querySelector(".popup_close");
const popup = document.querySelector(".popup");

const showTitle = () => {
  title.classList.toggle("hidden_title");
};
const changeBlocks = () => {
  elem.classList.toggle("block_elem2-change");
};
const closePopup = () => {
  popup.classList.add("hidden_popup");
};

buttonOne.addEventListener("click", showTitle);
buttonTwo.addEventListener("click", changeBlocks);
popupClose.addEventListener("click", closePopup);
