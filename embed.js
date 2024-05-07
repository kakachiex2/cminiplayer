document.addEventListener('DOMContentLoaded', function(){
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
  var playPauseButton = player.querySelector('play-pause');
  var stopButton = player.querySelector('stop');

  // Create the audio element
  var audioPlayer = player.querySelector('audio-player');
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
