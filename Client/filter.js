let url = "http://localhost:8080/api/room/getall";
let tanjson = document.querySelector('.call_person');

// 1. Lắng nghe sự kiện DOMContentLoaded để ẩn nút đăng nhập và TỰ ĐỘNG GỌI HÀM CALLPE
document.addEventListener("DOMContentLoaded", () => {
    let id = localStorage.getItem("userid");
    let loginBox = document.getElementById("login-box");

    console.log("id hiện tại:", id);

    if (id) {
        loginBox.style.display = "none";
    }

    // 🔴 KÍCH HOẠT GỌI HÀM LẤY DANH SÁCH PHÒNG KHI TRANG TẢI XONG
    callpe();
});

// 2. Hàm lấy danh sách phòng trọ và render ra giao diện Card
async function callpe() {
    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log("Dữ liệu phòng nhận được từ API:", data);

        // Xóa sạch dữ liệu cũ trong khung chứa (nếu có) trước khi append dữ liệu mới
        if (tanjson) tanjson.innerHTML = "";

        data.forEach(room => {
            // Tạo khung Card Bootstrap
            let card = document.createElement("div");
            card.className = "col-12 col-md-6 col-xl-4 mb-4"; // Đã sửa mr-5 thành mb-4 cho chuẩn lưới Bootstrap

            // Tạo thẻ chứa ảnh
            let image = document.createElement("img");
            image.className = "img-fluid rounded mb-2"; // Thêm class Bootstrap để ảnh tự co giãn đẹp mắt
            image.style.height = "200px";
            image.style.width = "100px"               // Fix chiều cao bằng nhau cho các card đều đẹp
            image.style.objectFit = "cover";            // Ảnh không bị méo khi thu phóng

            // Mặc định nếu phòng không có ảnh nào
            image.src = "https://via.placeholder.com/350x200?text=No+Image";

            // 🔴 XỬ LÝ CHỈ LẤY ĐÚNG 1 FILE ẢNH ĐẦU TIÊN
            if (room.images && room.images.length > 0) {
                let firstImageObj = room.images[0];

                // Kiểm tra xem backend của bạn trả về thuộc tính là 'image_data' hay 'image'
                let base64String = firstImageObj.image_data || firstImageObj.image;

                if (base64String) {
                    // Ghép tiền tố Base64 vào src để trình duyệt hiểu được mảng byte dữ liệu ảnh
                    image.src = `data:image/jpeg;base64,${base64String}`;
                }
            }

            // Tạo thẻ hiển thị giá tiền
            let price = document.createElement("strong");
            price.className = "d-block text-danger fs-5";
            // Định dạng giá tiền nhìn cho chuyên nghiệp (Ví dụ: 2000000 -> 2.000.000 đ)
            price.innerText = Number(room.price).toLocaleString('vi-VN') + " đ/tháng";

            // Tạo thẻ hiển thị địa chỉ
            let address = document.createElement("p");
            address.className = "text-muted small text-truncate"; // Ẩn văn bản thừa nếu địa chỉ quá dài
            address.innerText = room.address;
            let noidung = document.createElement("p");
            noidung.innerText = room.noiDung
            let thoigian = document.querySelector("p")
            thoigian.innerText = room.createdAt;

            // Tiến hành Append các thành phần vào cấu trúc Card
            card.appendChild(image);
            card.appendChild(price);
            card.appendChild(address);
            card.appendChild(noidung);
            card.appendChild(thoigian)

            // Đẩy Card vào vùng chứa chính trên giao diện HTML
            if (tanjson) {
                tanjson.appendChild(card);
            }
        });

    } catch (error) {
        console.error("Lỗi khi gọi API lấy danh sách phòng trọ:", error);
    }
}
// let diachi = document.querySelector(".addressFilter");
// let gia_toithieu = document.querySelector(".minPri");
// let gia_toida = document.querySelector(".maxPri");
// let dientich_toithieu = document.querySelector(".minDientich");
// let dientich_toida = document.querySelector(".maxDientich");
// let locketqua = document.querySelector(".locketqua");
// let url = ""
// async function filter() {

//     try {
//         let response = await fetch(url, { method: "POST" })
//         let data = await response.json();

//     }
//     catch (error) { console.log(error) };
// }