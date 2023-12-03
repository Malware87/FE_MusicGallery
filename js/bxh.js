function fetchData() {
    fetch('http://127.0.0.1:8000/api/song/gettopsong', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ many: 20 })
    })
        .then((response) => response.json())
        .then((data) => {
            writeData(data);
        });
}
function writeData(data) {
    const bxh = document.getElementById('bxh');
    bxh.innerHTML = "";
    let num = 1;
    data.forEach((song) => {
        const row = `
        <li id="song_559979">
              <span class="number one">${num}</span>
              <a href="">
                <img class="thumb" src="">
              </a>
              <div class="fll" style="margin-top: 10px;">
                <h3 class="over-text mw350"><a href="play.html?id=${song.id}">${song.song_name}</a></h3>
                <p class="over-text mw350"><a title="${song.singer_name}" class="singer" href="artist-detail.html?id=${song.singerID}">${song.singer_name}</a>
                </p>
              </div>
              <!--<p class="flr icon_songv line80"></p>-->
              <div class="more_action actions">
                <ul>
                  <!-- <li><a href="" title="Thích" class="like_song" id="song-559979"><i
                        class="new-small-icon-v2 icon-yeuthich-v2"></i></a></li>
                  <li><a onclick="" href="" title="Chia sẻ qua facebook"><i
                        class="new-small-icon-v2 icon-chiase-v2"></i>awdawd</a></li> -->
                  <li><a class="addsongtmpl" href="" title="Thêm vào playlist" id="559979"><i
                        class="las la-folder-plus"></i>Thêm vào Playlist</a></li>
                  <li><a id="downloadLink"  class="song-download-ext" title="Tải xuống" href="http://127.0.0.1:8000${song.file_path}" ><i
                        class="las la-download"></i>Download</a></li>
                </ul>
              </div>
            </li>
        `;
        bxh.innerHTML += row;
        num++;
    })
}
fetchData();