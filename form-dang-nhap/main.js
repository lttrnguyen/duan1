// Hiển thị/Ẩn mật khẩu khi nhấp vào nút #eye
$(document).ready(function () {
  $("#eye").click(function () {
    $(this).toggleClass("open");
    $(this).children("i").toggleClass("fa-eye fa-eye-slash");
    if ($(this).hasClass("open")) {
      $(this).prev().attr("type", "text");
    } else {
      $(this).prev().attr("type", "password");
    }
  });
});

// Xử lý logic đăng nhập
$("#login").click(function () {
  var tendn = $("#tendn").val();
  var mk = $("#mk").val();

  if (tendn === "") {
    alert("Tên đăng nhập không được để trống");
    return;
  }
  if (mk === "") {
    alert("Mật khẩu không được để trống");
    return;
  }

  if (tendn === "trongnguyen" && mk === "nguyen") {
    window.location.href = "/index.html";
  } else {
    alert("Lỗi: Sai tên đăng nhập hoặc mật khẩu");
  }
});

$("#dk1").click(function () {
  window.location.href = "sign-up.html";
});
$("#dk2").click(function () {
  window.location.href = "login.html";
});
