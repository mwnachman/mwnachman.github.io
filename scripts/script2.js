
function reward(person) {
	document.getElementById('questions').setAttribute('class', 'invisible');
	document.getElementById('result').setAttribute('class', 'visible');
	if ( person === Rihanna ) {
		document.getElementById('reward').setAttribute("src", "images/Rihanna.png");
		$('#beckyIs').text("Rihanna!");
	}
	else if ( person === Mya ) {
		document.getElementById('reward').setAttribute("src", "images/Mya.png");
		$('#beckyIs').text("Mya!");
	} 
	else if ( person === TSwift ){
		document.getElementById('reward').setAttribute("src", "images/taylorbecky.jpeg");
		$('#beckyIs').text("Taylor Swift!");
	} else if ( person === Clinton){
		document.getElementById('reward').setAttribute("src", "images/Clinton.png");
		$('#beckyIs').text("Hillary Clinton");
	}
	else if ( person === Trump){
		document.getElementById('reward').setAttribute("src", "images/donald.png");
		$('#beckyIs').text("The Donald");
	}
	else if ( person === Rita){
		document.getElementById('reward').setAttribute("src", "images/Rita.png");
		$('#beckyIs').text("Rita Ora");
	}
	else if ( person === AuntBecky){
		document.getElementById('reward').setAttribute("src", "images/auntbecky.jpg");
		$('#beckyIs').text("Aunt Becky");
	}
	else if ( person === Fabio){
		document.getElementById('reward').setAttribute("src", "images/Fabio.gif");
		$('#beckyIs').text("Fabio");
	}
	else if ( person === Roy){
		document.getElementById('reward').setAttribute("src", "images/rachelroy.jpg");
		$('#beckyIs').text("Rachel Roy");
	}
	else if ( person === Ray){
		document.getElementById('reward').setAttribute("src", "images/rachelray.jpg");
		$('#beckyIs').text("Rachel Ray");
	}

}


var lightq2 = function () {
	$('#initial').slideUp(1000);
	document.getElementById('sixth').setAttribute('class', 'invisible');
	document.getElementById('first').setAttribute('class', 'visible');
	
}

var darkq2 = function () {
	$('#initial').slideUp(1000);
	document.getElementById('first').setAttribute('class', 'invisible');
	document.getElementById('sixth').setAttribute('class', 'visible');
	
}

var lightNYq3 = function () {
	$('#first').slideUp(1000);
	document.getElementById('fourth').setAttribute('class', 'invisible');
	document.getElementById('second').setAttribute('class', 'visible');
}

var lightLAq3 = function () {
	$('#first').slideUp(1000);
	document.getElementById('second').setAttribute('class', 'invisible');
	document.getElementById('fourth').setAttribute('class', 'visible');

}

var TSwift = function () {
	reward (TSwift);
}

var lightNYnotSingerq4 = function () {
	$('#second').slideUp(1000);
	document.getElementById('third').setAttribute('class', 'visible');
}

var Clinton = function () {
	reward(Clinton);
}

var Trump = function () {
	reward(Trump);
} 

var lightLA30q4 = function () {
	$('#fourth').slideUp(1000);
	document.getElementById('fifth').setAttribute('class', 'visible');
}

var Rita = function () {
	reward(Rita);
}

var AuntBecky = function () {
	reward(AuntBecky);
}

var Fabio = function () {
	reward(Fabio);
}

var darkSingerq2 = function () {
	$('#sixth').slideUp(1000);
	document.getElementById('seventh').setAttribute('class', 'invisible');
	document.getElementById('eighth').setAttribute('class', 'visible');
}

var darkNotSingerq2 = function () {
	$('#sixth').slideUp(1000);
	document.getElementById('eighth').setAttribute('class', 'invisible');
	document.getElementById('seventh').setAttribute('class', 'visible');
}

var Roy = function () {
	reward (Roy);
}

var Ray = function () {
	reward (Ray);
}

var Mya = function () {
	reward (Mya);}

var Rihanna = function () {
	reward (Rihanna);
}


