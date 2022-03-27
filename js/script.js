console.clear();

const createAccountButton = document.querySelector("#create-account");
const signUpForm = document.querySelector(".sign-up-form");
const cancelButton = document.querySelector(".cancel-button");
const overlay = document.querySelector("#overlay");

createAccountButton.addEventListener("click", () => {
  openSignUpPanel();
});
cancelButton.addEventListener("click", () => {
  closeSignUpPanel();
});

function openSignUpPanel() {
  signUpForm.classList.add("active");
  overlay.classList.add("active");
}
function closeSignUpPanel() {
  signUpForm.classList.remove("active");
  overlay.classList.remove("active");
}
