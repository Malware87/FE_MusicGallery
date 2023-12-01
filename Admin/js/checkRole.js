// Nếu userRole không phải là "Admin", ẩn các phần tử có class "ifAdmin"
if (localStorage.getItem("userRole") !== "Admin") {
    window.location.href = "./";
}