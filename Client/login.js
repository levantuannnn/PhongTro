
window.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector(".form_login");
    const registerForm = document.querySelector(".from_sigin");

    const showRegister = document.querySelector("#showRegister");
    const showLogin = document.querySelector("#showLogin");

    const loginBtn = document.querySelector("#login_button");
    const registerBtn = document.querySelector("#register_button");

    showRegister.addEventListener("click", (e) => {
        e.preventDefault();

        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });



    showLogin.addEventListener("click", (e) => {
        e.preventDefault();

        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });


    registerBtn.addEventListener("click", (e) => {

        e.preventDefault();

        let username = document.querySelector(".name_sigin").value.trim();
        let password1 = document.querySelector(".password_login").value.trim();
        let password2 = document.querySelector(".password_login2").value.trim();

        // kiểm tra rỗng
        if (!username || !password1 || !password2) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        // kiểm tra username
        if (username.length < 8) {
            alert("Tên người dùng phải từ 8 ký tự trở lên");
            return;
        }

        // kiểm tra mật khẩu
        if (password1 !== password2) {
            alert("Mật khẩu không khớp");
            return;
        }

        axios.post(
            'http://localhost:8080/api/client/addUser',
            {
                username: username,
                password: password2
            }
        )
            .then(response => {

                if (response.data === true) {

                    alert("Đăng ký thành công");

                    // reset form
                    document.querySelector(".name_sigin").value = "";
                    document.querySelector(".password_login").value = "";
                    document.querySelector(".password_login2").value = "";

                    registerForm.style.display = "none";
                    loginForm.style.display = "block";

                } else {
                    alert("Tài khoản đã tồn tại");
                }

            })
            .catch(error => {
                console.log(error);
                alert("Lỗi server");
            });

    });



    loginBtn.addEventListener("click", (e) => {

        e.preventDefault();

        let username = document.querySelector(".name_login").value.trim();
        let password = document.querySelector(".passwork_login").value.trim();

        if (!username || !password) {
            alert("Vui lòng nhập tài khoản và mật khẩu");
            return;
        }

        axios.post(
            'http://localhost:8080/api/client/login/user?username='
            + username +
            '&password='
            + password
        )
            .then(response => {
                const userId = response.data;

                console.log("ID người dùng nhận được:", userId); // Kết quả sẽ ra số (Ví dụ: 1, 2) chứ không bị undefined nữa

                // Nếu tìm thấy user hợp lệ (Backend trả về ID > 0)
                if (userId && userId > 0) {
                    alert("dang nhap thanh cong")
                    // Lưu cả 2 thông tin vào localStorage để sang trang index.html dùng
                    localStorage.setItem("username", username);
                    localStorage.setItem("userid", response.data.id); // Lưu ID từ backend trả về

                    // Chuyển trang
                    window.location.href = "index.html";

                } else {
                    // Trường hợp backend trả về null hoặc báo sai tài khoản/mật khẩu
                    alert("Sai tài khoản hoặc mật khẩu");
                }
            })
            .catch(error => {
                console.log(error);
                alert("Lỗi server");
            });

    });

});