(function () {
    // Get the script tag that loaded this script
    var scriptTag = document.currentScript;

    // Get the attributes from the script tag
    var audioSrc = scriptTag.getAttribute('data-audio-src');
    var playerId = scriptTag.getAttribute('data-player-id');
    var width = scriptTag.getAttribute('data-width');
    var height = scriptTag.getAttribute('data-height');

    // Create the audio player widget
    var player = document.createElement('div');
    player.className = 'player';
    document.body.appendChild(player);

    // Create the audio element
    var audioPlayer = document.createElement('audio');
    audioPlayer.src = audioSrc;
    player.appendChild(audioPlayer);

    // Create the playback controls
    var playPauseButton = document.createElement('button');
    playPauseButton.textContent = 'Play';
    player.appendChild(playPauseButton);

    var stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    player.appendChild(stopButton);

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
})();
