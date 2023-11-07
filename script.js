document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const image = document.getElementById('myImg');

    let audioPlayed = false;

    audio.addEventListener('play', function() {
        if (!audioPlayed) {
            image.src = '/img/christmas2.gif';

            setTimeout(function() {
                image.src = '/img/christmas3.gif';
                audioPlayed = true;
            }, 5550);
        }
    });

    image.addEventListener('load', function() {
        if (audioPlayed) {
            image.src = '/img/christmas3.gif';
        }
    });
});