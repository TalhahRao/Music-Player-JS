let songs = [
    "music/videoplayback.weba",
    "music/videoplayback.weba",
    
];

let currentSong = 0;

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};  
function nextSong() {
    currentSong = (currentSong + 1) % songs.length; 
    song.src = songs[currentSong]; 
    song.load(); 
    song.play(); 
    ctrlIcon.classList.remove("bi-play-fill");
    ctrlIcon.classList.add("bi-pause-fill");
}

playPause = () => {
  if (ctrlIcon.classList.contains("bi-play-fill")) {
    song.play();
    ctrlIcon.classList.remove("bi-play-fill");
    ctrlIcon.classList.add("bi-pause-fill");
  } else {
    song.pause();
    ctrlIcon.classList.add("bi-play-fill");
    ctrlIcon.classList.remove("bi-pause-fill");
  }
};
if(song.play){
    setInterval(()=>{
        progress.value = song.currentTime
    },500);
}
progress.onchange = function(){
    song.play;
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("bi-play-fill");
    ctrlIcon.classList.add("bi-pause-fill");
}