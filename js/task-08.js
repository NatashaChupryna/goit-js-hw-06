const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі дані 😉");
  }

  let obj = {
    userEmail: email.value,
    userPassword: password.value,
  };
  
  console.log(obj);

  event.currentTarget.reset();
}

