let url = "http://localhost:8080/api/room/getall";
let tanjson = document.querySelector('.call_person');

document.addEventListener("DOMContentLoaded", () => {
    let id = localStorage.getItem("userid");
    let loginBox = document.querySelector(".usernames");

    console.log("id hiện tại:", id);

    if (id != 0) {
        if (loginBox) {
            loginBox.style.display = "none";
            let use_name = document.querySelector(".use_name");
            use_name.innerText = localStorage.getItem("username")
        }

    }
    callpe();
});

function renderRooms(data) {
    if (!tanjson) return;
    tanjson.innerHTML = ""; // Xóa sạch dữ liệu cũ

    if (!data || data.length === 0) {
        tanjson.innerHTML = "<p class='text-center text-muted w-100'>Không tìm thấy phòng trọ nào phù hợp.</p>";
        return;
    }

    data.forEach(room => {
        // Tạo khung Card Bootstrap
        let card = document.createElement("div");
        card.className = "col-12 col-md-6 col-xl-4 mb-4";

        // Tạo thẻ chứa ảnh
        let image = document.createElement("img");
        image.className = "img-fluid rounded mb-2";
        image.style.height = "200px";
        image.style.width = "100%"; // Để width 100% card sẽ chuẩn Bootstrap hơn là cố định 200px
        image.style.objectFit = "cover";

        // Mặc định nếu phòng không có ảnh nào
        image.src = "https://via.placeholder.com/350x200?text=No+Image";

        if (room.images && room.images.length > 0) {
            let firstImageObj = room.images[0];
            let base64String = firstImageObj.image_data || firstImageObj.image;

            if (base64String) {
                // Kiểm tra xem backend trả về dạng link hay base64 nguyên bản
                if (base64String.startsWith('http') || base64String.startsWith('data:')) {
                    image.src = base64String;
                } else {
                    image.src = `data:image/jpeg;base64,${base64String.trim()}`;
                }
            }
        }

        // Tạo thẻ hiển thị giá tiền
        let price = document.createElement("strong");
        price.className = "d-block text-danger fs-5";
        price.innerText = Number(room.price || 0).toLocaleString('vi-VN') + " đ/tháng";

        // Tạo thẻ hiển thị diện tích
        let dientich = document.createElement("p");
        dientich.className = "mb-1 fw-bold text-secondary";
        dientich.innerText = `Diện tích: ${room.dientich || '---'} m²`;

        // Tạo thẻ hiển thị địa chỉ
        let address = document.createElement("p");
        address.className = "text-muted small text-truncate mb-1";
        address.innerText = "địa chỉ: " + room.address || "";

        // Tạo thẻ nội dung mô tả
        let noidung = document.createElement("p");
        noidung.className = "text-truncate mb-1 small";
        noidung.innerText = "nội dung: " + room.noiDung || "";

        // Tạo thẻ thời gian đăng
        let thoigian = document.createElement("p");
        thoigian.className = "text-muted extra-small"
        thoigian.style.fontSize = "12px";
        thoigian.innerText = "Ngày đăng: " + (room.createdAt || "---");

        // Tiến hành Append các thành phần vào cấu trúc Card
        card.appendChild(image);
        card.appendChild(price);
        card.appendChild(dientich);
        card.appendChild(address);
        card.appendChild(noidung);
        card.appendChild(thoigian);

        // Đẩy Card vào vùng chứa chính trên giao diện HTML
        tanjson.appendChild(card);
    });
}

// 1. Hàm lấy TOÀN BỘ danh sách phòng trọ ban đầu
async function callpe() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log("Dữ liệu phòng nhận được từ API:", data);
        renderRooms(data);
    } catch (error) {
        console.error("Lỗi khi gọi API lấy danh sách phòng trọ:", error);
    }
}

// 2. Chức năng TÌM KIẾM nhanh bằng phím Enter
let timkiem = document.querySelector(".timkiem");
console.log("timkiem:", timkiem)
if (timkiem) {
    timkiem.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {

            let valueSearch = timkiem.value.trim();

            console.log("gia tri search:", valueSearch)
            let url_timkiem = `http://localhost:8080/api/room/search?tim=${valueSearch}`;

            try {
                let response = await fetch(url_timkiem);
                let data = await response.json();
                renderRooms(data);
            } catch (error) {
                console.error("Lỗi tìm kiếm:", error);
            }
        }
    });
}

// 3. Chức năng LỌC nâng cao (Nhiều thuộc tính)
let diachi = document.querySelector("#addressFilter");
let gia_toithieu = document.querySelector(".minPri");
let gia_toida = document.querySelector(".maxPri");
let dientich_toithieu = document.querySelector(".minDientich");
let dientich_toida = document.querySelector(".maxDientich");
let locketqua = document.querySelector(".locketqua");

async function applyFilter() {
    let valDiaChi = diachi && diachi.value ? diachi.value.trim() : "";
    let valMinGia = gia_toithieu && gia_toithieu.value ? gia_toithieu.value.trim() : "";
    let valMaxGia = gia_toida && gia_toida.value ? gia_toida.value.trim() : "";
    let valMinDT = dientich_toithieu && dientich_toithieu.value ? dientich_toithieu.value.trim() : "";
    let valMaxDT = dientich_toida && dientich_toida.value ? dientich_toida.value.trim() : "";

    // Sử dụng đối tượng này để tự động loại bỏ param trống
    let params = new URLSearchParams();

    if (valDiaChi) params.append('diachi', valDiaChi);
    if (valMinGia) params.append('giatoithieu', valMinGia);
    if (valMaxGia) params.append('giatoida', valMaxGia);
    if (valMinDT) params.append('dientoithieu', valMinDT);
    if (valMaxDT) params.append('dientoida', valMaxDT);

    // URL mới sẽ chỉ chứa những ô bạn thực sự nhập
    let url_filter = `http://localhost:8080/api/room/loc?${params.toString()}`;

    console.log("Đường dẫn lọc gửi đi:", url_filter);

    try {
        let response = await fetch(url_filter, { method: "GET" });
        let data = await response.json();
        renderRooms(data); // Gọi hàm render dùng chung
    } catch (error) {
        console.error("Lỗi khi lọc kết quả:", error);
    }
}

// ĐÃ SỬA: Lắng nghe sự kiện click vào nút Lọc để kích hoạt hàm lọc
if (locketqua) {
    locketqua.addEventListener("click", applyFilter);
}