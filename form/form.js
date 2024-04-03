const form = document.getElementById("form");
const showJson = document.querySelector(".json");

const createJSON = (jsonData) => {
  showJson.innerText = JSON.stringify(jsonData, null, 2);
};

const getRequest = async (formData) => {
  createJSON(Object.fromEntries(formData));

  try {
    const queryString = new URLSearchParams(formData).toString();
    const url = `handler.php?${queryString}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Не удалось выполнить запрос");
    }
    alert("Данные получены");
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  getRequest(formData);
});
