// Variable
// declarando o forms
const forms = document.querySelector("form");
// Declarando o botão
const btn = document.getElementById("btn-2");
// Regex para verificar email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Event
btn.addEventListener("click", (event) => {
  event.preventDefault();
  // For para os 3 elementos de input do formulário
  for (let i = 0; i <= 3; i++) {
    if (!forms[i].value) {
      forms[i].nextElementSibling.classList.add("active");
      forms[i].classList.add("input_active");
      forms[i].nextElementSibling.innerText = "cannot be empty";
    } else {
      forms[i].nextElementSibling.classList.remove("active");
      forms[i].classList.remove("input_active");
    }
    if (i == 2) {
      if (!emailRegex.test(forms[2].value)) {
        forms[2].nextElementSibling.innerText =
          "Looks like this is not an email";
        forms[2].nextElementSibling.classList.add("active");
      } else {
        forms[2].nextElementSibling.classList.remove("active");
      }
    }
  }
});
