function login(url) {
    window.location.href = url;
}

// function dangtin(url) {
//     window.location.href = url;
// }
let btn = document.querySelector('.btn-primary');
btn.addEventListener('click', () => {
    let url = 'dangtin.html';
    window.location.href = url;
})
function boloc() {
    let filter = document.querySelector('.filter-container');
    if (filter.classList.contains('d-none')) {
        filter.classList.remove('d-none'); // hiện
    } else {
        filter.classList.add('d-none'); // ẩn
    }
}
