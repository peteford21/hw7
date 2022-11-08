var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// turn autoplay off
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)
	document.getElementById("mute").muted = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing Video Down")
	video.playbackRate = video.playbackRate * .9;
	console.log("Current video speed " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding Video Up")
	video.playbackRate = video.playbackRate / .9;
	console.log("Current video speed " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var seconds = video.duration;
	console.log("Skipping ahead 10 seconds")
	if (video.currentTime + 10 > seconds){
		// video.pause();
		video.currentTime = 0;
		video.load();
		console.log("Restarting video")
		video.play()
	}
	else{
		video.currentTime = video.currentTime + 10;
	}
	console.log("Current video time " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		console.log("Unmuting the video")
		video.muted = false
		this.innerHTML = "Mute";
	}
	else{
		console.log("Muting the video")
		video.muted = true;
		this.innerHTML = "Unmute";

	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("changing volume")
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	video.className = "video oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Old School")
	video.className = "video";
});