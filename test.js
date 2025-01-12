
const allSongs = [
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "Deva Deva - Brahmastra 320 Kbps.mp3", label: 'Deva Deva - Brahmastra' },
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "Kesariya - Brahmastra 320 Kbps.mp3", label: 'Kesariya - Brahmastra' },
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "Rasiya Reprise - Brahmastra 320 Kbps.mp3", label: 'Rasiya Reprise - Brahmastra' },
];
var songHtml = '';

allSongs.forEach((ele, index) => {
    songHtml = songHtml + `<div class="songItem">
    <img
    src="${ele.img}"
    alt="1">
    <span>${ele.label} </span>
    <span class="songlistplay"><span class="timestamp">05:34 <i
        class="fa-sharp fa-regular fa-circle-play" data-index="${index}" id="id${index}"></i></span></span>
    </div>`;
})
var songContainer = document.getElementById("songContainer")
songContainer.innerHTML = songHtml;
var audioElement = new Audio();
var isPlaying = false;
// let audioElement = new Audio('/mp3 song/Deva Deva - Brahmastra 320 Kbps.mp3'); 
function palyPause(e) {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        this.isPlaying = true;
        console.log('play');
    } else {
        audioElement.pause();
        this.isPlaying = false;
    }
    updatemasterPlayBtn();
    
}
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    document.getElementById("MyProgressBar").value = progress;
    // / Format current time
    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    let currentSeconds = Math.floor(audioElement.currentTime % 60);
    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds; // Add leading zero

    // Format duration
    let totalMinutes = Math.floor(audioElement.duration / 60);
    let totalSeconds = Math.floor(audioElement.duration % 60);
    if (totalSeconds < 10) totalSeconds = "0" + totalSeconds; // Add leading zero

    // Display current time and duration
    document.getElementById("timmer").innerText = `${currentMinutes}:${currentSeconds} / ${totalMinutes}:${totalSeconds}`;

    // document.getElementById("timmer").innerText =  audioElement.duration;

});


var currentSongIndex = 0;

document.querySelectorAll('.fa-circle-play').forEach((playButton) => {
    playButton.addEventListener('click', function () {
        var songIndex = this.getAttribute('data-index');
        try {
            if (currentSongIndex === songIndex && isPlaying) {
                // Pause the song if it is already playing
                audioElement.pause();
                isPlaying = false;
                this.classList.remove('fa-circle-pause');
                this.classList.add('fa-circle-play');
            } else {
                // Play the song if it's not already playing
                audioElement.src = `/mp3 song/${allSongs[songIndex].src}`;
                audioElement.play();
                isPlaying = true;
                currentSongIndex = songIndex;
    
                // Change the icon to pause
                document.querySelectorAll('.fa-circle-play').forEach(button => {
                    button.classList.remove('fa-circle-pause');
                    button.classList.add('fa-circle-play');
                });
                this.classList.remove('fa-circle-play');
                this.classList.add('fa-circle-pause');
            } 
        } catch (error) {
            console.log(error.message);
            
        }
        updatemasterPlayBtn();
    });
});
function frdbtn() {
    console.log("forwardClick");
    console.log(currentSongIndex);

    let songIndex = parseInt(currentSongIndex) + 1;
    console.log(songIndex);

    if (songIndex < allSongs.length) {
        // Update the audio source and play
        audioElement.src = `/mp3 song/${allSongs[songIndex].src}`;
        audioElement.play();
        isPlaying = true;

        // Update currentSongIndex
        const prevSongIndex = currentSongIndex; // Store the previous index
        currentSongIndex = songIndex;

        // Get the previous and next elements
        const prevElement = document.getElementById('id' + prevSongIndex);
        const nextElement = document.getElementById('id' + songIndex);

        console.log(prevElement);
        console.log(nextElement);

        // Reset the previous element's icon
        if (prevElement) {
            prevElement.classList.remove('fa-circle-pause');
            prevElement.classList.add('fa-circle-play');
        }

        // Update the next element's icon
        if (nextElement) {
            nextElement.classList.remove('fa-circle-play');
            nextElement.classList.add('fa-circle-pause');
        }

        // Update master play button
        updatemasterPlayBtn();
    } else {
        console.log('End of songs');
    }
}

function bcdbtn() {
    console.log("backwardClick");
    console.log(currentSongIndex);

    let songIndex = parseInt(currentSongIndex) - 1; // Decrease the index
    console.log(songIndex);

    // Ensure songIndex is within valid range
    if (songIndex >= 0) {
        // Update the audio source and play
        audioElement.src = `/mp3 song/${allSongs[songIndex].src}`;
        audioElement.play();
        isPlaying = true;

        // Store the previous index before updating currentSongIndex
        const prevSongIndex = currentSongIndex;
        currentSongIndex = songIndex;

        // Get the previous and current elements
        const prevElement = document.getElementById('id' + prevSongIndex);
        const currentElement = document.getElementById('id' + currentSongIndex);

        console.log(prevElement);
        console.log(currentElement);

        // Reset the previous element's icon
        if (prevElement) {
            prevElement.classList.remove('fa-circle-pause');
            prevElement.classList.add('fa-circle-play');
        }

        // Update the current element's icon
        if (currentElement) {
            currentElement.classList.remove('fa-circle-play');
            currentElement.classList.add('fa-circle-pause');
        }

        // Update master play button
        updatemasterPlayBtn();
    } else {
        console.log('Reached the beginning of the playlist');
    }
}


function updatemasterPlayBtn() {
    console.log(isPlaying);
    
    const masterPlay = document.getElementById("masterPlay");

    if (!isPlaying) {
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        // Update currentSongIndex
        const prevSongIndex = currentSongIndex;
       
        // Get the previous and next elements
        const prevElement = document.getElementById('id' + prevSongIndex);

        // Reset the previous element's icon
        if (prevElement) {
            prevElement.classList.remove('fa-circle-pause');
            prevElement.classList.add('fa-circle-play');
        }
    } else {
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        const prevSongIndex = currentSongIndex;
        const prevElement = document.getElementById('id' + prevSongIndex);

        // Reset the previous element's icon
        if (prevElement) {
            prevElement.classList.remove('fa-circle-play');
            prevElement.classList.add('fa-circle-pause');
        }
        
    }
}

