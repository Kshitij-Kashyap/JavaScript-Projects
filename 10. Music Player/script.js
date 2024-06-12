document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progress');
    const song = document.getElementById('song');
    const ctrlIcon = document.getElementById('ctrlIcon');

    song.addEventListener('loadedmetadata', () => {
        progress.max = song.duration;
        progress.value = song.currentTime;
    });

    function playPause() {
        if (song.paused) {
            ctrlIcon.src = "https://img.icons8.com/dusk/64/circled-pause.png";
            song.play();
        } else {
            ctrlIcon.src = "https://img.icons8.com/dusk/64/circled-play.png";
            song.pause();
        }
    }

    function updateProgress() {
        progress.value = song.currentTime;
        if (!song.paused) {
            requestAnimationFrame(updateProgress);
        }
    }

    song.addEventListener('play', () => {
        requestAnimationFrame(updateProgress);
    });

    progress.addEventListener('input', () => {
        song.currentTime = progress.value;
        if (song.paused) {
            ctrlIcon.src = "https://img.icons8.com/dusk/64/circled-play.png";
        } else {
            ctrlIcon.src = "https://img.icons8.com/dusk/64/circled-pause.png";
        }
    });

    document.querySelector('.controls div:nth-child(2)').addEventListener('click', playPause);
});
