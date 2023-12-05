const urlParams = new URLSearchParams(window.location.search);
entry = urlParams.get("q");
fetch("http://127.0.0.1:8000/api/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ entry: entry }),
})
  .then((response) => {
    return response.json();
  })
  .then(({ song, artist, count }) => {
    console.log(song, artist, count);
    document.getElementById("search-count").innerHTML = `
   Tìm được ${count} kết quả:
    `;
    const songList = document.getElementById("page1");
    songList.innerHTML = "";
    song.forEach((song) => {
      const row = `
        <ul class="pl-0 mt-3">
        <li class="d-flex style-none justify-content-between" style="border-bottom: 1px solid gray;">
          <div class="d-flex ">
            <div class="">
              <a href="play.html?id=${song.id}">${song.title}</a>
              <p>${song.singerName}</p>
            </div>
          </div>
          <div class="d-flex flex-end">
            <button style="height: 30px; width: 30xp; margin-top: 8px;" onclick="openDialog(${song.id})"><i
                class='bx bxs-message-square-add'></i></button>
            <!-- icom -->
          </div>
        </li>
      </ul>
        `;
      songList.innerHTML += row;
    });
    const artistList = document.getElementById("page2");
    artistList.innerHTML = "";
    artist.forEach((artist) => {
      const row = `
        <ul class="pl-0 mt-3">
        <li class="d-flex style-none justify-content-between" style="border-bottom: 1px solid gray;">
          <div class="d-flex ">
            <img class="mr-4" style="height: 60px; width: 60px;" src="http://127.0.0.1:8000${artist.urlAvatar}" alt="anh music">
            <div class="">
              <a href="artist-detail.html?id=${artist.id}">${artist.name}</a>
            </div>
          </div>
        </li>
      </ul>
        `;
      artistList.innerHTML += row;
    });
  });
