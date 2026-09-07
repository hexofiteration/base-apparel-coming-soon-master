const form = document.querySelector("form");
const email = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

const emailRegex =
  /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isEmailValid();
});
function isEmailValid() {
  if (email.value === "" || !emailRegex.test(email.value)) {
    errorIcon.classList.remove("hide");
    errorMessage.classList.remove("hide");
  } else {
    errorIcon.classList.add("hide");
    errorMessage.classList.add("hide");
  }
}
