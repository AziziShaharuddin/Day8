var vid = document.getElementById('video');
var isPlaying = false;
var volume = 1;
var volume2 = volume;
var next = 0;

function vidStart() {
    if (isPlaying == false) {
        video.play();
        isPlaying = true;
        document.getElementById("play-button").innerHTML = "<i class='fa fa-pause'></i>";
        return;
    }
    if (isPlaying == true) {
        video.pause();
        isPlaying = false;
        document.getElementById("play-button").innerHTML = "<i class='fa fa-play'></i>";
        return;
    }
}

function volumeButton(num) {
    volume += num;

    if (volume <= 0) {
        volume = 0;
    }
    else if (volume >= 1) {
        volume = 1;
    }
    console.log(volume);
    video.volume = volume;
    volume2 = volume;
}

function muteButton() {
    if (volume > 0) {
        volume = 0;
        vid.volume = volume;
        console.log (volume2);
    }
    else if (volume == 0) {
        volume = volume2;
        vid.volume = volume;
    }
}

function switchForward() {
    next += 1;
    console.log(next);
    if (next == 0) {
        video.src = 'pexels-mart-production-7565884.mp4'; // purple
    }
    if (next == 1) {
        video.src = 'production ID_4936486.mp4'; //sail
    }
    if (next == 2) {
        video.src = 'production ID_5204290.mp4'; //sunset
    }
    if (next == 3) {
        video.src = 'production ID_3818936.mp4'; //racing
    }
    if (next == 4) {
        video.src = 'pexels-mart-production-7565884.mp4'; // purple
    }
    if (next == 5) {
        next = 0;
    }
}

function switchBackward() {
    next -= 1;
    console.log(next);
    if (next == 0) {
        video.src = 'pexels-mart-production-7565884.mp4'; // purple
    }
    if (next == -1) {
        video.src = 'production ID_3818936.mp4'; //racing
    }
    if (next == -2) {
        video.src = 'production ID_5204290.mp4'; //sunset
    }
    if (next == -3) {
        video.src = 'production ID_4936486.mp4'; //sail
    }
    if (next == -4) {
        video.src = 'pexels-mart-production-7565884.mp4'; // purple
    }
    if (next == -5) {
        next = 0;
    }
}

function subVideo (videoName) {
    video.src = videoName
}