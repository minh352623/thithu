window.addEventListener("load", function () {
  const register = document.querySelector(".register");
  let arrUser = [];
  register.addEventListener("submit", function (event) {
    event.preventDefault();
    const valueName = this.querySelector(".value-hoten").value;
    const valueAge = this.querySelector(".value-age").value;
    const valueSdt = this.querySelector(".value-sdt").value;
    const valueEmail = this.querySelector(".value-email").value;
    const valueBH = this.querySelector(".value-bh").value;
    let index = valueBH.indexOf("HC");
    let firstVlueBH = valueBH.slice(0, index);
    const Name = this.querySelector(".error-name");
    const Age = this.querySelector(".error-age");
    const Sdt = this.querySelector(".error-sdt");
    const Email = this.querySelector(".error-email");
    const BH = this.querySelector(".error-bh");
    let isName = false;
    let isAge = false;
    let isSdt = false;
    let isEmail = false;
    let isBH = false;
    let regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (valueName == "") {
      Name.textContent = "Ho ten khong duoc khong";
      isName = false;
    } else {
      Name.textContent = "";
      isName = true;
    }

    if (+valueAge < 18 || +valueAge > 45) {
      Age.textContent = "Tuoi lon hơn 18 và bé hơn 45";
      isAge = false;
      console.log("abc");
    } else {
      Age.textContent = "";
      isAge = true;
    }

    if (valueSdt.length != 10) {
      Sdt.textContent = "sdt phải có 10 số";
      isSdt = false;
    } else {
      Sdt.textContent = "";
      isSdt = true;
    }

    if (!regexEmail.test(valueEmail)) {
      Email.textContent = "Không đúng định dạng email";
      isEmail = false;
    } else {
      Email.textContent = "";
      isEmail = true;
    }
    if (valueBH.length != 8) {
      BH.textContent = "Bảo hiểm phải có 8 kí tự";
      isBH = false;
    } else if (index <= -1) {
      BH.textContent = "Bảo hiểm phải có từ HC ở cuối";
      isBH = false;
    } else if (isNaN(firstVlueBH)) {
      BH.textContent = "6 kí tự đầu phải là số";
      isBH = false;
    } else {
      BH.textContent = "";
      isBH = true;
    }

    if (isName && isAge && isSdt && isEmail && isBH) {
      let user = {
        name: valueName,
        age: valueAge,
        sdt: valueSdt,
        email: valueEmail,
        bh: valueBH,
      };
      arrUser.push(user);
      window.localStorage.setItem("register", JSON.stringify(user));
      alert("đăng kí thành công, bạn có thể đăng nhập ngay bây giờ!");
      window.location.href = "./login.html";
    }
  });
});
