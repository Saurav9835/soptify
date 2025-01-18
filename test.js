
const allSongs = [
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "Deva Deva - Brahmastra 320 Kbps.mp3", label: 'Deva Deva - Brahmastra' },
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "Kesariya - Brahmastra 320 Kbps.mp3", label: 'Kesariya - Brahmastra' },
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "Rasiya Reprise - Brahmastra 320 Kbps.mp3", label: 'Rasiya Reprise - Brahmastra' },
    { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_gpAA6L_yqVM2G31eG9HcEb9X4JXqvBobP3BTVpqKEWirwo4C", src: "pk.mp3", label: 'Bhavan hai kha re tum - PK' },
    { img: "data:image/jpeg;base64,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" ,src: "Jo Tum Mere Ho - Anuv Jain 320 Kbps.mp3", label: 'Tum Jo Mere ho' },
    { img: "https://pagalfree.com/images/128Kalank%20(Bonus%20Track)%20-%20Kalank%20128%20Kbps.jpg", src: "Kalank (Bonus Track) - Kalank 320 Kbps.mp3", label: ' Kalank (Bonus Track) - Kalank' },
    { img: "https://pagalfree.com/images/128Kalank%20(Bonus%20Track)%20-%20Kalank%20128%20Kbps.jpg", src: "Kala Tika(KoshalWorld.Com).mp3", label: 'Kala Tika' },
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
// Update seekBar
MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
})

