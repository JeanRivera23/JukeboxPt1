//Jukebox HTML elements stored in variables
var playBtn1 = document.getElementById("playBtn1");
var pauseBtn1 = document.getElementById("pauseBtn1");
var playBtn2 = document.getElementById("playBtn2");
var pauseBtn2 = document.getElementById("pauseBtn2");
var playBtn3 = document.getElementById("playBtn3");
var pauseBtn3 = document.getElementById("pauseBtn3");
var playBtn4 = document.getElementById("playBtn4");
var pauseBtn4 = document.getElementById("pauseBtn4");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
index = 0;

//Jukebox object constructor function: Jukebox object structure & methods
function Jukebox() {
  this.music = [];
}

//this.music value will be audio mp3s
var audio1 = new Audio(this.music);
var audio2 = new Audio(this.music);
var audio3 = new Audio(this.music);
var audio4 = new Audio(this.music);

//addSong method adds song MP3s to Jukebox object
Jukebox.prototype.addSong = function(song) {
  this.music.push(song);
}

//instantiation: jukebox object created, songs pushed into jukebox array
var classical = new Jukebox();
var jazz = new Jukebox();
var halloween = new Jukebox();
var christmas = new Jukebox();

classical.addSong("Vivaldi_LaCetraOp9_Allegro.mp3");
jazz.addSong("bensound-thejazzpiano.mp3");
halloween.addSong("bensound-creepy.mp3");
christmas.addSong("JonSayles-OLittleTownofBethlehem.mp3");

audio1.src = classical.music[index];

//setting the classical methods
Jukebox.prototype.play = function() {
  audio1.play();
}

Jukebox.prototype.pause = function() {
  audio1.pause();
}

audio2.src = jazz.music[index];

//setting the jazz methods
Jukebox.prototype.play = function() {
  audio2.play();
}

Jukebox.prototype.pause = function() {
  audio2.pause();
}

audio3.src = halloween.music[index];

//setting the Halloween methods
Jukebox.prototype.play = function() {
  audio3.play();
}

Jukebox.prototype.pause = function() {
  audio3.pause();
}

audio4.src = christmas.music[index];

//setting the christmas methods
Jukebox.prototype.play = function() {
  audio4.play();
}

Jukebox.prototype.pause = function() {
  audio4.pause();
}

//classical control buttons event listeners
playBtn1.addEventListener("click", function(event) {
 event.preventDefault();
 // audio1.src = classical.music[index];
 audio1.play();
})

pauseBtn1.addEventListener("click", function(event) {
 event.preventDefault();
 // audio1.src = classical.music[index];
 audio1.pause();
})

//jazz control buttons event listeners
playBtn2.addEventListener("click", function(event) {
 event.preventDefault();
 // audio2.src = jazz.music[index];
 audio2.play();
})

pauseBtn2.addEventListener("click", function(event) {
 event.preventDefault();
 // audio2.src = jazz.music[index];
 audio2.pause();
})

//halloween control buttons event listeners
playBtn3.addEventListener("click", function(event) {
 event.preventDefault();
 // audio3.src = halloween.music[index];
 audio3.play();
})

pauseBtn3.addEventListener("click", function(event) {
 event.preventDefault();
 // audio3.src = halloween.music[index];
 audio3.pause();
})

//christmas control buttons event listeners
playBtn4.addEventListener("click", function(event) {
 event.preventDefault();
 audio4.play();
})

pauseBtn4.addEventListener("click", function(event) {
 event.preventDefault();
 audio4.pause();
})

//form
var jukebox = document.getElementById("jukebox");
var submitBtn = document.getElementById("submit");

//what happens when submit button is clicked
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  // HTML form elements defined
  var sourceMP3 = document.getElementById("sourceMP3");
  var sourceImg = document.getElementById("sourceImg");
  var captionText = document.getElementById("captionText");

  //image, audio and paragraph objects created
  var newImg = new Image(sourceImg.value);
  var newMusic = new Music(sourceMP3.value);
  var newCaption = new Caption(text.value);

  //create HTML elements
  var divElement = document.createElement("div")
  var imageElement = document.createElement("div");
  var audioElement = document.createElement("audio");
  var pElement = document.createElement("p");
  var newCtrls = document.createElement("div");
  var newPlay = document.createElement("button");
  var newPause = document.createElement("button");

  newPlay.class = "playBtn";
  newPause.class = "pauseBtn";
  newCtrls.Id = "musicCtrls";

  divElement.Id = "newDiv";
  imageElement.Id = "newImage";
  imageElement.style.backgroundImage = url(newImg.sourceImg);
  audioElement.src = newMusic.sourceMP3;
  pElement.innerHTML = newCaption.text;

  //new element play and pause button event listeners
  var audioPlus = new Audio();

  newPlay.addEventListener("click", function(event) {
   event.preventDefault();
   audioPlus.src = newMusic.sourceMP3;
   audioPlus.play();
  })

  newPause.addEventListener("click", function(event) {
   event.preventDefault();
   audio.src = newMusic.sourceMP3;
   audioPlus.pause();
  })

  jukebox.appendChild(divElement);
  divElement.appendChild(pElement);
  divElement.appendChild(imageElement);
  divElement.appendChild(audioElement);
  divElement.appendChild(newCtrls);
  musicCtrls.appendChild(newPlay);
  musicCtrls.appendChild(newPause);

})

// var audio = new Audio("CreepySettingA.mp3");
// audio.play();










//constructor functions & their methods for creating new image, caption & audio fields
// function Image(source) {
//   this.source = source;
// }
//
// Image.prototype.addImg = function(source) {
//   this.source.push(source);
// }
//
// function Music(source) {
//   this.source = source;
// }
//
// Music.prototype.addMusic = function(source) {
//   this.source.push(source);
// }
//
// function Caption(text) {
//   this.text = text;
// }
//
// Caption.prototype.addCaption = function(text) {
//   this.text.push(text);
// }
