const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
  submitBtn: document.querySelector("button"),
};

function formSubmit(event) {
  event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Будь ласка, заповніть всі дані 😉");
    };

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
}

