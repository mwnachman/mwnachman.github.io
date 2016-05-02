var myImage = document.querySelector('#switcheroo');

myImage.onclick = function() {
	var num = Math.random();
	var imageNumber = Math.floor(num*20);
	var imageName = "images/" + imageNumber + ".png"
	myImage.setAttribute ('src', imageName);
}

 