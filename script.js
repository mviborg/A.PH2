// slider 
var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

//video 

var myVideo = document.getElementById("video1");

function Pause() {
	myVideo.pause();
}

function Play() {
	if (myVideo.paused)
		myVideo.play();
}

//scrool 

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
	myFunction()
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}


//slutskrift 
document.getElementById("slutskrift").addEventListener("mouseover", mouseOver);
document.getElementById("slutskrift").addEventListener("mouseout", mouseOut);

function mouseOver() {
	document.getElementById("slutskrift").style.color = "#6890c3";
}

function mouseOut() {
	document.getElementById("slutskrift").style.color = "white";
}

//stort billede - teks. 
function stor(x) {
	x.style.height = "600px";
	x.style.width = "400px";
}

function lille(x) {
	x.style.height = "150px";
	x.style.width = "100px";
}


