document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const image = document.getElementById('myImg');

    let audioPlayed = false;

    audio.addEventListener('play', function() {
        if (!audioPlayed) {
            image.src = 'christmas2.gif';

            setTimeout(function() {
                image.src = 'https://imgur.com/a/KdaSuHF';
                audioPlayed = true;
            }, 5550);
        }
    });

    image.addEventListener('load', function() {
        if (audioPlayed) {
            image.src = 'https://imgur.com/a/KdaSuHF';
        }
    });
});