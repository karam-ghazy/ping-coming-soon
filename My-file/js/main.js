let emailInput = document.querySelector(".notify input");
let emailContainer = document.querySelector(".notify");
let submitBtn = document.querySelector(".notify .submit");

submitBtn.onclick = function () {
  let email = emailInput.value;
  let test = validateEmail(email);
  if (!test) {
    let error = document.createElement("p");
    error.innerHTML = "Please provide a valid email address";
    error.classList.add("error-message");
    emailInput.classList.add("error");
    emailContainer.appendChild(error);
  } else {
    let p = document.querySelector(".error-message");
    p.remove();
    emailInput.classList.remove("error");
  }
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
