let form_sgin = document.querySelector(".from_sigin");
console.log(form_sgin);
let dangky = document.querySelector("#register_button")
console.log(dangky)
dangky.addEventListener("click", () => {
    let password = document.querySelector(".password_login").value;
    let username = document.querySelector(".name_sigin").value;
    axios.post(
        'http://localhost:8080/api/client/adduser?username='
        + username +
        '&password='
        + password
    )
        .then(response => {
            console.log(username)
            console.log(password)
            if (response.data === true) {

                alert("Đăng ky thành công");

                // lưu user
                localStorage.setItem("username", username);

                const loginBtn = document.querySelector(".form-login");
                form_sgin.style.display = "none";
                loginBtn.style.display = "block"

            } else {
                alert("Sai tài khoản hoặc mật khẩu");
            }

        })
        .catch(error => {
            console.log(error);
            alert("Lỗi server");
        });
})