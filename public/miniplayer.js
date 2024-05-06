const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');

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
