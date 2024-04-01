//bài 1

function layDiem() {
  var diemChuan = 0;
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;
  var diemMonThu1 = 0;
  var diemMonThu2 = 0;
  var diemMonThu3 = 0;
  diemChuan = +document.querySelector("#inputScore1").value;
  diemKhuVuc = +document.querySelector("#selLocation").value;
  diemDoiTuong = +document.querySelector("#selUser").value;
  diemMonThu1 = +document.querySelector("#inputScore2").value;
  diemMonThu2 = +document.querySelector("#inputScore3").value;
  diemMonThu3 = +document.querySelector("#inputScore4").value;
  var ketQua = ketQuaTs(
    diemChuan,
    diemKhuVuc,
    diemDoiTuong,
    diemMonThu1,
    diemMonThu2,
    diemMonThu3
  );

  document.querySelector(
    ".output"
  ).innerHTML = `<p class="text-center">${ketQua}</p>`;
}
//bài 2

function laySoDien() {
  var hoTen = document.querySelector("#inputName").value;
  var soKw = +document.querySelector("#inputKW").value;
  var ketQua = tinhTienDien(hoTen, soKw);
  document.querySelector(
    ".output2"
  ).innerHTML = `<p class="text-center">${ketQua}</p>`;
}

//bài 3

function layThue() {
  var hoTen = document.querySelector("#inputName2").value;
  var tongThuNhap = +document.querySelector("#inputSalary").value;
  var soNguoiPhuThuoc = +document.querySelector("#inputUser").value;
  var ketQua = tinhThue(hoTen, tongThuNhap, soNguoiPhuThuoc);
  console.log(ketQua);
  document.querySelector(
    ".output3"
  ).innerHTML = `<p class="text-center">${ketQua}</p>`;
}

//bài4
function disableInput() {
  var e = document.getElementById("selCustomer").value;
  document.getElementById("inputConnect").style.display =
    "company" == e ? "block" : "none";
}

function layThongTinCap() {
  var customer = document.querySelector("#selCustomer").value;
  var idCustomer = document.querySelector("#inputID").value;
  var chanel = +document.querySelector("#inputChanel").value;
  var ketNoi;
  var xuLyHoaDon = 0;
  var dichVu = 0;
  var soTienMoiKeNH = 0;

  if (customer === "user") {
    xuLyHoaDon = 4.5;
    dichVu = 20.5;
    soTienMoiKeNH = 7.5;
    ketNoi = 0;
  } else {
    xuLyHoaDon = 15;
    ketNoi = document.querySelector("#inputConnect").value * 1;

    if (ketNoi < 0) {
      return "Vui lòng nhập lại số kết nối";
    } else if (ketNoi <= 10) {
      dichVu = 75;
    } else {
      dichVu = 75 + (ketNoi - 10) * 5;
    }
    soTienMoiKeNH = 50;
    console.log(dichVu);
  }
  var ketQua = tinhTienCap(
    idCustomer,
    xuLyHoaDon,
    dichVu,
    chanel,
    soTienMoiKeNH,
    ketNoi,
    customer
  );
  document.querySelector(
    ".output4"
  ).innerHTML = `<p class="text-center">${ketQua}</p>`;
}
