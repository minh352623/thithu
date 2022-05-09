window.addEventListener("load", function () {
  let user = JSON.parse(window.localStorage.getItem("login"));
  const infouserold = document.querySelector(".user");
  const infouser = document.querySelector(".info-user-login");

  console.log(user.name.length);
  if (user.name.length > 0) {
    infouserold.style.display = "none";
    infouser.innerHTML = "Xin chào " + user.name;
  }
});
