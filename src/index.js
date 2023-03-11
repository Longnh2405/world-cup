const danhSachDoiBong = [
  {
    id: 1,
    ten: "Brazin",
    huanLuyenVien: "Tite",
    soLanVoDich: 15,
  },
  {
    id: 2,
    ten: "Đức",
    huanLuyenVien: "Hansi Flick",
    soLanVoDich: 10,
  },
  {
    id: 3,
    ten: "Pháp",
    huanLuyenVien: "Deschamps",
    soLanVoDich: 12,
  },
];

function nhapDuLieu() {
  let id = prompt("Nhập id cho đội bóng: ");
  let ten = prompt("Nhập tên của đội bóng: ");
  let huanLuyenVien = prompt("Nhập tên huấn luyện viên: ");
  let soLanVoDich = prompt("Nhập số lần vô địch: ");
  id = Number(id);
  soLanVoDich = Number(soLanVoDich);
  danhSachDoiBong.push({
    id: id,
    ten: ten,
    huanLuyenVien: huanLuyenVien,
    soLanVoDich: soLanVoDich,
  });
  console.log("Nhập dữ liệu thành công, mời bạn tiếp tục thao tác!");
}
function xuatDuLieu() {
  danhSachDoiBong.forEach((value) => {
    console.log("Id đội bóng: ", value.id);
    console.log("Tên đội bóng: ", value.ten);
    console.log("Tên huấn luyện viên: ", value.huanLuyenVien);
    console.log("Số lần vô địch: ", value.soLanVoDich);
  });
}
function timThongTin() {
  let id = prompt("Nhập id đội bóng cần tìm: ");
  let check = danhSachDoiBong.find((value) => {
    return (value.id = id);
  });
  if (check) {
    return console.log(check);
  } else {
    return console.log("Không tìm thấy");
  }
}
function xoaThongTin() {
  let id = prompt("Nhập id cần xoá: ");
  let check = danhSachDoiBong.find((value) => {
    return (value.id = id);
  });
  let index = danhSachDoiBong.indexOf(check);
  if (check) {
    danhSachDoiBong.splice(index, 1);
  } else {
    console.log("Không tìm thấy đội bóng nào để xóa");
  }
}

function menu() {
  let todo = true;
  do {
    let luachon = prompt(`
    ===Menu world cup ====
    1. Nhập dữ liệu
    2. Xuất dữ liệu
    3. Tìm thông tin
    4. Xoá thông tin
    5. Thoát`);
    luachon = Number(luachon);
    switch (luachon) {
      case 1:
        nhapDuLieu();
        break;
      case 2:
        xuatDuLieu();
        break;
      case 3:
        timThongTin();
        break;
      case 4:
        xoaThongTin();
        break;
      case 5:
        console.log("Goodbye!");
        todo = false;
        break;
    }
  } while (todo);
}
menu();
