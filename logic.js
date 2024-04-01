//bài 1
/**
 * Tính kết quả tuyển sinh dựa vào điểm chuẩn và điểm 3 môn cộng với điểm ưu tiên khu vực và đói tượng
 * @param {*} diemChuan điểm chuẩn để xét đạt hay rớt
 * @param {*} diemKhuVuc điểm cộng cho từng khu vực
 * @param {*} diemDoiTuong điểm cộng cho từng đối tượng
 * @param {*} diemMonThu1 điểm của môn đầu tiên
 * @param {*} diemMonThu2 điểm của môn thứ hai
 * @param {*} diemMonThu3 điểm của môn thứ ba
 * @returns
 */
function ketQuaTs(
  diemChuan,
  diemKhuVuc,
  diemDoiTuong,
  diemMonThu1,
  diemMonThu2,
  diemMonThu3
) {
  if (diemMonThu1 === 0 || diemMonThu2 === 0 || diemMonThu3 === 0) {
    return "Rớt do một trong ba môn bị 0";
  }
  if (
    diemMonThu1 < 0 ||
    diemMonThu1 > 10 ||
    diemMonThu2 < 0 ||
    diemMonThu2 > 10 ||
    diemMonThu3 < 0 ||
    diemMonThu3 > 10
  ) {
    return "Nhập sai số điểm xin nhập lại";
  }
  var tongDiem =
    diemMonThu1 + diemMonThu2 + diemMonThu3 + diemDoiTuong + diemKhuVuc;
  if (tongDiem >= diemChuan) {
    return `Đậu Chúc mừng bạn tổng điểm là ${tongDiem}`;
  } else {
    return `Bạn đã trượt`;
  }
}

// bài 2
/**
 * Hàm tính tiền điện theo mức giá
 * 50kw đâu : 500d/kw
 * 50kw kế : 650d/kw
 * 100kw Kế : 850d/kw
 *150kw kế : 1100d/kw
 *Còn lại : 1300d/kw
 * @param {*} hoVaTen họ và tên khách hàng
 * @param {*} soKw  số kw tiêu thụ
 * @returns
 */
function tinhTienDien(hoVaTen, soKw) {
  var tienDien = 0;
  if (soKw < 0) {
    return "Xin hãy nhập lại số Kw";
  }
  if (soKw <= 50) {
    tienDien = 50 * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 150) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
  }
  return `${hoVaTen} số tiền điện: ${tienDien.toLocaleString()}`;
}

//bài 3
/**
 * Tính thuế theo các mốc
 * @param {*} hoVaTen họ và tên người cần tính
 * @param {*} tongThuNhap tổng thu nhập của người cần tính
 * @param {*} soNguoiPhuThuoc số người phụ thuộc trong gia đình
 * @returns
 */
function tinhThue(hoTen, thuNhapNam, soNguoiPhuThuoc) {
  let thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  let thue = 0;

  if (thuNhapChiuThue >= 960000000) {
    thue = thuNhapChiuThue * 0.35;
  } else if (thuNhapChiuThue >= 624000000) {
    thue = 624000000 * 0.25 + Math.max(thuNhapChiuThue - 624000000, 0) * 0.3;
  } else if (thuNhapChiuThue >= 384000000) {
    thue = 384000000 * 0.2 + Math.max(thuNhapChiuThue - 384000000, 0) * 0.25;
  } else if (thuNhapChiuThue >= 210000000) {
    thue = 210000000 * 0.15 + Math.max(thuNhapChiuThue - 210000000, 0) * 0.2;
  } else if (thuNhapChiuThue >= 120000000) {
    thue = 120000000 * 0.1 + Math.max(thuNhapChiuThue - 120000000, 0) * 0.15;
  } else if (thuNhapChiuThue >= 60000000) {
    thue = 60000000 * 0.05 + Math.max(thuNhapChiuThue - 60000000, 0) * 0.1;
  } else if (thuNhapChiuThue > 0) {
    thue = thuNhapChiuThue * 0.05;
  }
  return `${hoTen} ${thue.toLocaleString()}`;
}

//bài 4

function tinhTienCap(
  id,
  xuLyHoaDon,
  dichVu,
  Kenh,
  soTienMoiKenh,
  ketNoi,
  loai
) {
  var tongTien = 0;
  if (loai === "user") {
    tongTien = xuLyHoaDon + dichVu + Kenh * soTienMoiKenh + ketNoi;
    return `Mã khách hàng:${id}, Tiền cáp ${tongTien} `;
  }
  if (loai === `company`) {
    tongTien = xuLyHoaDon + dichVu + Kenh*soTienMoiKenh ;
    console.log(xuLyHoaDon);
    console.log(dichVu);
    console.log(Kenh);
    return `Mã khách hàng:${id}, Tiền cáp ${tongTien.toLocaleString()}$ `;
  }
}
