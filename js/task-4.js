const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const formObject = {
      Email: email.value.trim(),
      Password: password.value.trim(),
    };
    console.log(formObject);
    loginForm.reset();
  }
});
