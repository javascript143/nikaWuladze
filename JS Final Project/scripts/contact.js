// burger menu
function burgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const u_list = document.querySelector(".u_list");
  hamburger.classList.toggle("active");
  u_list.classList.toggle("active");
}

function SubmitInfo() {
  let address = document.getElementById("address").value;
  let tel = document.getElementById("tel").value;
  let zipCode = document.getElementById("zipCode").value;
  let country = document.getElementById("country").value;

  let existingInfo = localStorage.getItem("userInfo");
  if (existingInfo) {
    let parsedInfo = JSON.parse(existingInfo);
    parsedInfo.push({
      address: address,
      tel: tel,
      zipCode: zipCode,
      country: country,
    });
    let updatedInfo = JSON.stringify(parsedInfo);
    localStorage.setItem("userInfo", updatedInfo);
  } else {
    localStorage.setItem("userInfo", JSON.stringify([]));
    existingInfo = localStorage.getItem("userInfo");
    let parsedInfo = JSON.parse(existingInfo);
    parsedInfo.push({
      address: address,
      tel: tel,
      zipCode: zipCode,
      country: country,
    });
    let updatedInfo = JSON.stringify(parsedInfo);
    localStorage.setItem("userInfo", updatedInfo);
  }
}

function logOut() {
  sessionStorage.removeItem("sessionToken");
  history.replaceState(null, "", "index.html");
  window.location.href = "index.html";
}
