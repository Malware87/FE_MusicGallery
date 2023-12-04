fetch('http://127.0.0.1:8000/api/genre')
    .then(response => {
        return response.json();
    }).then(data => {
        const genreTab = document.getElementById('genreTab');
        genreTab.innerHTML = "";
        data.forEach(genre => {
            const row = `<div class="col-3 pd-0">
            <a href="album.html" class="play ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ywvJ7J1SXreqoU3cPMHWXjLDkpquSRELUA&usqp=CAU"
                alt="anh nhac">
              <p> <i class='bx bx-play-circle'></i></p>
            </a>
            <a href="album.html">${genre.name}</a>
          </div>`;
            genreTab.innerHTML += row;
        });
    });
fetch('http://127.0.0.1:8000/api/song/new')
    .then(response => {
        return response.json();
    }).then(data => {
        const newSongTab = document.getElementById('newSong');
        newSongTab.innerHTML = `<h3>Bài Hát Mới Phát Hành</h3>
            <!-- <a class="ml-4 mr-2" href="#">Nghe Nhiều</a>
                <a href="#">Mới Nhất</a> -->
          </div>
          `;
        data.forEach(song => {
            const row = `<div class="row mt-2 mb-2">
                <div class="col-6 mt-2 mb-2 d-flex newsong">
                    <img class="mr-1"
                        src="http://127.0.0.1:8000${song.file_path}" alt="son tung">
                        <div class="newsongtext ml-2 mt-1">
                            <a href="play.html?id=${song.id}">${song.title}</a> <br>
                                <a href="artist-detail.html?id=${song.singerID}">${song.artist}</a>
                        </div>
                    </div>`;

            newSongTab.innerHTML += row;
        });
    });