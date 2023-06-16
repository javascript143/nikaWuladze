function loginToSite() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  let userDataFromDB = localStorage.getItem("userData");
  userDataFromDB = JSON.parse(userDataFromDB);

  for (let userInfo of userDataFromDB) {
    if (userInfo.username === username) {
      if (userInfo.password === password) {
        result.innerHTML = "you logged in to your account!";
        result.style.color = "green";
        break;
      } else {
        result.innerHTML = "Password is incorrect!";
        result.style.color = "red";
        break;
      }
    } else {
      result.innerHTML = "Username is incorrect!";
      result.style.color = "red";
    }
  }
}
