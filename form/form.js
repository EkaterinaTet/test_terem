const form = document.getElementById("form");
const select_container = document.querySelector(".select_container");

for (let i = 0; i < 5; i++) {
  const select = document.createElement("select");
  select.name = `Select ${i + 1}`;

  for (let j = 1; j <= 5; j++) {
    const option = document.createElement("option");
    option.text = j;
    option.value = j;
    select.add(option);
  }

  select_container.appendChild(select);
}

for (let i = 0; i < 2; i++) {
  const input = document.createElement("input");
  input.type = "text";
  input.name = `Input ${i + 1}`;
  input.placeholder = "Введите текст";
  input.classList.add("input");

  form.appendChild(input);
}

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Отправить";
submitButton.classList.add("button_submit");

form.appendChild(submitButton);

document.body.appendChild(form);

function createJSON() {
  const formData = new FormData(form);
  const jsonData = {};

  for (let [key, value] of formData.entries()) {
    if (jsonData[key]) {
      if (!Array.isArray(jsonData[key])) {
        jsonData[key] = [jsonData[key]];
      }
      jsonData[key].push(value);
    } else {
      jsonData[key] = value;
    }
  }
  return JSON.stringify(jsonData, null, 2);
}

const showJson = document.createElement("div");
showJson.classList = "json";
form.insertAdjacentElement("afterend", showJson);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  showJson.innerText = createJSON();

  const formData = new FormData(this);
  const queryString = new URLSearchParams(formData).toString();
  const url = `handler.php?${queryString}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      alert("Данные получены");
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
