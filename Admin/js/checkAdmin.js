// Nếu userRole không phải là "Admin", ẩn các phần tử có class "ifAdmin"
if (localStorage.getItem("userRole") !== "Admin") {
    const ifAdminElements = document.querySelectorAll('.ifAdmin');
    ifAdminElements.forEach(element => {
        element.classList.add("hidden");
    });
}