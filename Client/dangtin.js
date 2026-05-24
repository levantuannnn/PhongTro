let url = "http://localhost:8080/api/room";
let fileanh = document.querySelector(".file_anh");

// --- 1. CHỈ XỬ LÝ HIỂN THỊ PREVIEW ẢNH KHI CHỌN FILE ---
if (fileanh) {
    fileanh.addEventListener("change", (e) => {
        let arr = e.target.files;
        let filetan = document.querySelectorAll(".filetan");

        Array.from(arr).forEach((file, index) => {
            let reader = new FileReader();
            reader.onload = (e) => {
                if (filetan[index]) {
                    filetan[index].src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        });
    });
}

// --- 2. XỬ LÝ SỰ KIỆN GỬI DỮ LIỆU KHI BẤM NÚT ĐĂNG TIN ---
let dangtin = document.querySelector(".dangtin");

dangtin.addEventListener("click", () => {
    const currentUserId = localStorage.getItem("userid");
    if (!currentUserId) {
        alert("Vui lòng đăng nhập trước khi đăng tin!");
        return;
    }

    // Lấy dữ liệu chữ từ các ô input
    let ngaydang = document.getElementById("ngay_dang").value;
    let noidung = document.getElementById("noi_dung").value;
    let diachi = document.getElementById("dia_chi").value;
    let ngayhethan = document.getElementById("ngay_het_han").value;
    let giatien = document.getElementById("gia_tien").value;
    let dientich = document.getElementById("dien_tich").value;
    // Khởi tạo đối tượng FormData duy nhất (viết chuẩn chữ D viết hoa)
    let formData = new FormData();
    formData.append("userId", currentUserId);
    formData.append("ngaydang", ngaydang);
    formData.append("hethan", ngayhethan);
    formData.append("giatien", giatien);
    formData.append("dientich", dientich);
    formData.append("diachi", diachi);
    formData.append("noidung", noidung);

    // 🔴 GÔM FILE ẢNH VÀO FORMDATA NGAY TẠI ĐÂY
    if (fileanh && fileanh.files.length > 0) {
        Array.from(fileanh.files).forEach((file) => {
            // Tên key bắt buộc phải là "file" để khớp với @RequestParam List<MultipartFile> file bên Spring Boot
            formData.append("file", file);
        });
    } else {
        alert("Vui lòng chọn ít nhất 1 tấm ảnh trước khi đăng!");
        return;
    }

    // In kiểm tra dạng bảng ra Console
    console.log("--- KIỂM TRA DỮ LIỆU FORMDATA (DẠNG BẢNG) ---");
    console.table(Array.from(formData.entries()));

    // 5. Gửi API bằng Axios POST
    axios.post('http://localhost:8080/api/room/file', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(Response => {
            if (Response.data === true) {
                alert("Thêm thành công");
                window.location.reload();
                window.location.href = "index.html";
            } else {
                alert("Thêm thất bại, kiểm tra lại dữ liệu Backend");
            }
        })
        .catch(error => {
            console.log("Lỗi hệ thống:", error);
            alert("Không thể kết nối đến máy chủ hoặc sai cấu trúc dữ liệu gửi đi!");
        });
});