function logout() {
    // Xử lý đăng xuất ở đây (ví dụ: xóa các giá trị từ Local Storage)
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');

    // Chuyển hướng hoặc thực hiện các hành động khác sau khi đăng xuất
    window.location.href('../');
}