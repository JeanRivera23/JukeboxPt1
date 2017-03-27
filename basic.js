//Jukebox HTML elements stored in variables
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");
// counter
var index = 0;

//Jukebox object constructor function: Jukebox object structure & methods
function Jukebox() {
  this.music = [];
}

//addSong method adds MP3s to Jukebox object
Jukebox.prototype.addSong = function(songs) {
  this.music.push(songs);
}

//instantiation: jukebox object created, songs pushed into jukebox array
var juke = new Jukebox();

juke.addSong(new Audio("bensound-thejazzpiano.mp3"));
juke.addSong(new Audio("bensound-jazzyfrenchy.mp3"));
juke.addSong(new Audio("bensound-creepy.mp3"));
juke.addSong(new Audio("CreepySettingA.mp3"));
juke.addSong(new Audio("JonSayles-OLittleTownofBethlehem.mp3"));
juke.addSong(new Audio("JonSayles-GodRestYeMerryGentlemen.mp3"));

// audio.src = juke.music[index];

//setting the button methods
Jukebox.prototype.play = function() {
  this.music[index].play();
}

Jukebox.prototype.pause = function() {
  this.music[index].pause();
}

Jukebox.prototype.stop = function() {
  this.music[index].pause();
  this.music[index].currentTime = 0;
}

Jukebox.prototype.forward = function() {
  this.music[index].pause();
  index++
  this.music[index].currentTime = 0;
  this.music[index].play();
  if (index == this.music.length) {
    this.music[index].currentTime = 0;
    this.music[index].play();
  }
}

Jukebox.prototype.back = function() {
  this.music[index].pause();
  index--
  this.music[index].currentTime = 0;
  this.music[index].play();
  if (index == 0) {
    this.music[index].currentTime = 0;
    this.music[index].play();
  }
}

//button event listeners
playBtn.addEventListener("click", function(event) {
 event.preventDefault();
 juke.play();
 albumPic();
})

pauseBtn.addEventListener("click", function(event) {
 event.preventDefault();
 juke.pause();
 albumPic();
})

stopBtn.addEventListener("click", function(event) {
 event.preventDefault();
 juke.stop();
 albumPic();
})

nextBtn.addEventListener("click", function(event) {
 event.preventDefault();
 juke.forward();
 albumPic();
})

backBtn.addEventListener("click", function(event) {
 event.preventDefault();
 juke.back();
 albumPic();
})


var album = document.getElementById("album");
var title = document.getElementById("title");

function albumPic() {
  if (index == 0 || index == 1) {
    album.style.backgroundImage = "url('https://c2.staticflickr.com/2/1398/5136763472_2aac74078b_b.jpg')";
    title.textContent = "Jazz";
  }
  else if (index == 2 || index == 3) {
    album.style.backgroundImage = "url('https://image.freepik.com/free-vector/grunge-style-halloween-background-with-bats-jack-o-lantern-and-owl_1048-3035.jpg')";
    title.textContent = "Halloween";
  }
  else if (index == 4 || index == 5) {
    album.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/236x/9d/1e/da/9d1eda466744ed95db7bb24761eac2a5.jpg')";
    title.textContent = "Christmas";
  }
}
