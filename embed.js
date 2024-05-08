// embed.js
const css =

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
    font-family: Arial, sans-serif;
}

.music-player {
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    text-align: center;
}

.controls {
    margin-top: 20px;
}

button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
;

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
  // Get the script tag that loaded this script
  var scriptTag = document.currentScript;

  // Get the attributes from the script tag
  var audioSrc = scriptTag.getAttribute('data-audio-src');
  var playerId = scriptTag.getAttribute('data-player-id');
  var width = scriptTag.getAttribute('data-width');
  var height = scriptTag.getAttribute('data-height');

  // Get the existing player widget
  var player = document.getElementById('audio-player');

  // Get the existing buttons within the player widget
  var playPauseButton = player.querySelector('#play-pause'); // Corrected selector
  var stopButton = player.querySelector('#stop'); // Corrected selector

  // Create the audio element
  var audioPlayer = player.querySelector('audio');
  audioPlayer.src = audioSrc;

  // Add event listeners
  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audioPlayer.pause();
      playPauseButton.textContent = 'Play';
    }
  });

  stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseButton.textContent = 'Play';
  });
});
