function signUp() {
  // Declaring Elements
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("repeatPassword");
  let result = document.getElementById("result");
  let registerForm = document.querySelector("#form");
  // Regex Patterns
  const firstNameRegex = /^[A-Z]+[a-z]+$/;
  const lastNameRegex = /^[A-Z]+[a-z]+$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:|\.[a-zA-Z]{2,6})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let existingData = localStorage.getItem("registerData");
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  // validation section
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  if (
    existingData &&
    firstNameRegex.test(firstName.value) &&
    lastNameRegex.test(lastName.value) &&
    emailRegex.test(email.value) &&
    passwordRegex.test(password.value) &&
    repeatPassword.value == password.value
  ) {
    let parsedData = JSON.parse(existingData);
    for (let user of parsedData) {
      if (user.email === email.value) {
        result.innerHTML = "Email already exists!";
        result.style.color = "red";
        return;
      }
    }
    parsedData.push(user);
    let updatedData = JSON.stringify(parsedData);
    localStorage.setItem("registerData", updatedData);
    result.innerHTML = "Registration Done succesfuly!";
    result.style.color = "green";
    window.location.href = "index.html";
  } else if (
    !existingData &&
    existingData === null &&
    firstNameRegex.test(firstName.value) &&
    lastNameRegex.test(lastName.value) &&
    emailRegex.test(email.value) &&
    passwordRegex.test(password.value) &&
    repeatPassword.value == password.value
  ) {
    localStorage.setItem("registerData", JSON.stringify([user]));
    existingData = localStorage.getItem("registerData");
    let parsedData = JSON.parse(existingData);
    for (let user of parsedData) {
      if (user.email === email.value) {
        result.innerHTML = "Email already exists!";
        result.style.color = "red";
        return;
      }
    }
    parsedData.push(user);
    let updatedData = JSON.stringify(parsedData);
    localStorage.setItem("registerData", updatedData);
    window.location.href = "index.html";
  } else {
    result.innerHTML = "Registration failed. Try again!";
    result.style.color = "red";
  }
}
