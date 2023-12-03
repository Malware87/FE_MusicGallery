function Search() {
    const entry = document.getElementById('search-input').value;
    window.location.href = "search.html?entry=" + entry;
}