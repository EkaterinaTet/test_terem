const form = document.getElementById("form");
const showJson = document.querySelector(".json");
const inputs = document.querySelectorAll("input");
const selects = document.querySelectorAll("select");

let formData;

const createJSON = () => {
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data, null, 2);
  showJson.innerText = jsonData;
};

const getRequest = async () => {
  try {
    const queryString = new URLSearchParams(formData).toString();
    const url = `handler.php?${queryString}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Не удалось выполнить запрос");
    }
    const data = await response.json();
    alert("Данные получены", data);
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};

const clearFormFields = () => {
  inputs.forEach((input) => (input.value = ""));
  selects.forEach((select) => (select.selectedIndex = 0));
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  formData = new FormData(form);
  createJSON();
  getRequest();
  clearFormFields();
});
