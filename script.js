let video = document.getElementById("video1");
let controls = document.getElementById("controls");
let btns = document.getElementsByClassName("btn");

console.log(btns);

controls.addEventListener("mouseover", () => {
    for (var btn of btns) {
        console.log(btn);
        btn.hidden = false;
    }
})

controls.addEventListener("mouseout", () => {
    for (var btn of btns) {
        console.log(btn);
        btn.hidden = true;
    }
})

function backward() {
    video.currentTime -= 15;
}

function forward() {
    video.currentTime += 15;
}

function volumeDown() {
    video.volume -= 0.2;
}

function volumeUp() {
    video.volume += 0.2;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function display() {

}