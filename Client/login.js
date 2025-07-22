
let password;
let username;
let login_input = document.querySelector('.name_login');
if (login_input) {
    login_input.addEventListener('input', () => {
        username = login_input.value;
        console.log("Tên đăng nhập:", username);
    });
}
// hien thi dang nhap login 

let passwork = document.querySelector('.passwork_login');
if (passwork) {
    passwork.addEventListener('input', () => {
        password = passwork.value;
        console.log("Mật khẩu:", password);
    });
}

// dang ky user 

window.addEventListener('DOMContentLoaded', () => {
    let dang_ky = document.querySelector('#showRegister');
    dang_ky.addEventListener('click', () => {
        console.log("Đã nhấn nút đăng ký");

        let from_sigin = document.querySelector('.from_sigin');
        let login = document.querySelector(".form_login");
        from_sigin.style.display = "block";
        login.style.display = "none";

        let password1 = document.querySelector('.password_login')?.value.trim() || '';
        let password2 = document.querySelector('.password_login2')?.value.trim() || '';
        let uname_sigin = document.querySelector('.name_sigin')?.value.trim() || '';
        let ans = true;
        if (password1 !== password2) {

            alert("Mật khẩu không khớp.");
            return;
        }
        if (uname_sigin.length >= 8) {
            alert("ten nguoi dung phai lon 8 ky tu")
            return;
        }
        else if (uname_sigin.length < 8 && ans === false) {
            alert("ten nguoi dung nho hon hoac password chua nhap")
        }

        axios.post('http://localhost:8080/api/client/addUser', {
            username: uname_sigin,
            password: password2
        })
            .then(response => {
                if (response.data === true) {
                    alert("Đăng ký thành công");
                    login.style.display = "block";
                    from_sigin.style.display = "none";

                    // reset ô input
                    document.querySelector('.password_login').value = "";
                    document.querySelector('.password_login2').value = "";
                    document.querySelector('.name_sigin').value = "";
                } else {
                    alert("Thất bại: tài khoản đã tồn tại.");
                }
            })
            .catch(error => {
                console.error("Lỗi server:", error);
            });
    });
});

// show login hien thi dang ky
let showLogin = document.querySelector('#showLogin');
showLogin.addEventListener('click', () => {
    let from_sigin = document.querySelector('.from_sigin');
    from_sigin.style.display = "none";
    let login = document.querySelector(".form_login");
    login.style.display = "block";
})
// dang nhap  user 
let user_name = document.querySelector('.name_login');
let password_user = document.querySelector('.passwork_login');
document.querySelector("#login_button").addEventListener('click', () => {
    let username = user_name.value.trim();
    let password = password_user.value.trim();

    axios.post('http://localhost:8080/api/client/login', {
        username: username,
        password: password
    })
        .then(response => {
            if (response.data === true) {
                console.log("Đăng nhập thành công");

                let remoteUsername = document.querySelector('.usernames');
                if (remoteUsername) {
                    remoteUsername.innerText = username;
                }

                window.location.href = 'index.html'; // chuyển trang luôn
            }
            else {


            }
        })
        .catch(error => {
            console.log("Lỗi trả về từ server:", error);
        });
});
