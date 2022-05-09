window.addEventListener("load", function () {
  const register = document.querySelector(".register");

  let user = {
    name: "Trần Công Minh",
    email: "minh@gmail.com",
    pass: 1,
  };
  register.addEventListener("submit", function (event) {
    event.preventDefault();

    const valueEmail = this.querySelector(".value-email").value;

    const Email = this.querySelector(".error-email");

    let isEmail = false;

    let regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(valueEmail)) {
      Email.textContent = "Không đúng định dạng email";
      isEmail = false;
    } else if (valueEmail != user.email) {
      Email.textContent = "Sai Eamil";
      isEmail = false;
    } else {
      Email.textContent = "";

      isEmail = true;
    }

    if (isEmail) {
      alert("đăng nhập thành công, bây giờ đến trang chủ nhé");
      window.location.href = "./index.html";
    }
  });
});
