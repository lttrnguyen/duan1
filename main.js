// Chuyển hướng đến trang login.html
document
  .querySelector(".btn.btn-outline-light.me-2")
  .addEventListener("click", function () {
    window.location.href = "./form-dang-nhap/login.html";
  });

document
  .querySelector(".btn.btn-warning")
  .addEventListener("click", function () {
    window.location.href = "./form-dang-nhap/sign-up.html";
  });
