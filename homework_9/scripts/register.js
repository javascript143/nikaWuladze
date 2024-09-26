function signUpToSite() {
  let userDataFromDB = localStorage.getItem("userData");

  userDataFromDB = JSON.parse(userDataFromDB);

  let inputName = document.getElementById("name").value;
  let inputSurname = document.getElementById("surname").value;
  let inputLocation = document.getElementById("location").value;
  let inputUsername = document.getElementById("username").value;
  let inputPassword = document.getElementById("password").value;
  let result = document.getElementById("result");
  userDataFromDB.push({
    name: inputName,
    surname: inputSurname,
    location: inputLocation,
    username: inputUsername,
    password: inputPassword,
  });

  userDataFromDB = JSON.stringify(userDataFromDB);

  for (let userInfo of userDataFromDB) {
    if (userInfo.username === username) {
      result.innerHTML = "username already axists. try another one!";
      result.style.color = "red";
      break;
    } else {
      result.innerHTML =
        "registration completed successfully. go to login page to log in!";
      result.style.color = "green";
    }
  }
  localStorage.setItem("userData", userDataFromDB);
}
