const testVideo = document.querySelector('.testimonial-video');
const playBtn = document.querySelector('.play-button')

playBtn.addEventListener('click', (e) => {
    if (testVideo.paused) 
    testVideo.play(); 
    else 
    testVideo.pause();
})