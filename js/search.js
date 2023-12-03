const urlParams = new URLSearchParams(window.location.search);
entry = urlParams.get("entry");
fetch('http://127.0.0.1:8000/api/search', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ entry: entry }),
}).then(response => {
    return response.json();
}).then(({ song, artists }) => {
    console.log(song);
});