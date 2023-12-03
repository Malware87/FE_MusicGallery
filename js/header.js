document.addEventListener("DOMContentLoaded", function () {
    const avatarFrame = document.getElementById('avatarFrame');
    // Lấy giá trị từ Local Storage
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');
    const userAvatar = localStorage.getItem('userAvatar');
    const username = localStorage.getItem('username');
    if (userId) {
        avatarFrame.innerHTML = `
    <div id="avatarBox" class="avatar-box" onclick="toggleDropdown()">
        <img src="http://127.0.0.1:8000${userAvatar}" alt="Avatar">
        <div id="dropdown" class="dropdown-content">
            <a href="./Admin">Quản lý cá nhân</a>
            <a href="#" onclick="logout()">Đăng xuất</a>
        </div>
        <span id="username" class="username">${username}</span>
    </div>
`;
        const usernameElement = document.getElementById('username');
        usernameElement.style.marginLeft = '8px';
    }
});
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
}
function logout() {
    // Xử lý đăng xuất ở đây (ví dụ: xóa các giá trị từ Local Storage)
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');

    // Chuyển hướng hoặc thực hiện các hành động khác sau khi đăng xuất
    window.location.reload();
}
document.addEventListener('click', function (event) {
    const avatarBox = document.getElementById('avatarBox');
    const dropdown = document.getElementById('dropdown');

    // Kiểm tra xem sự kiện click có xảy ra trong hoặc bên trong avatar box không
    if (!avatarBox.contains(event.target) && !dropdown.contains(event.target)) {
        // Nếu không, đóng dropdown
        dropdown.style.display = 'none';
    }
});

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}