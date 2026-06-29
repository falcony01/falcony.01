const text = "profile"; 
let index = 0;
function typeTitle() {
    document.title = text.slice(0, index + 1);
    index++;
    if (index >= text.length) {
        index = 0;
    }
}
setInterval(typeTitle, 400);
const video = document.getElementById('myvedio');
const muteBtn = document.getElementById('mute-btn');
const muteIcon = document.getElementById('mute-icon');
function initAudio() {
    video.muted = false;
    video.play().catch(err => console.log("في انتظار تفاعل المستخدم..."));
    document.removeEventListener('click', initAudio);
    document.removeEventListener('keydown', initAudio);
}
document.addEventListener('click', initAudio);
document.addEventListener('keydown', initAudio);
muteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (video.muted) {
        video.muted = false;
        muteIcon.className = 'bx bx-volume-full';
    } else {
        video.muted = true;
        muteIcon.className = 'bx bx-volume-mute';
    }
});