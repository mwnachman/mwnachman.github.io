   
// var TS = "Taylor Swift"
// var Roy = "Rachel Roy"
// var Ray = "Rachael Ray"
// var DT = "Donald Trump"
// var Mya = "Mya"
// var Ri = "Rihanna"
// var Aunt = "Aunt Becky"
// var Fab = "Fabio"
// var RO = "Rita Ora"
// var HC = "Hillary Clinton"

// var array = [TS, Roy, Ray, DT, Mya, Ri, Aunt, Fab, RO, HC]

// var On = function(name_id) {
// 	var name = "'" + name_id + "'";
// 	document.getElementById(name).style.width = "auto";
// 	document.getElementById(name).style.width = "auto";
// }

// var Off = function(name_id) {
// 	var name = "'" + name_id + "'";
// 	document.getElementById(name).style.width = 0;
// 	document.getElementById(name).style.width = "0";
// }

function reward(person) {
	document.getElementById('questions').setAttribute('class', 'invisible');
	document.getElementById('result').setAttribute('class', 'visible');
	if ( person === Rihanna ) {
		document.getElementById('reward').setAttribute("src", "images/lemon1.gif");
	}
	else if ( person === Mya ) {
		document.getElementById('reward').setAttribute("src", "images/lemon1.gif");
	}
}


var lightq2 = function () {
	$('#initial').slideUp(1000);
	// delete array[1];
	// delete array[2];
	// delete array[4];
	// delete array[5];
	// delete array[6];
	// Off(sixth);
	// On(first);
	// document.getElementById('sixth').style.width = "0";
	// document.getElementById('sixth').style.height = "0";
	// document.getElementById('first').style.width = "auto";
	// document.getElementById('first').style.height = "auto";
	document.getElementById('sixth').setAttribute('class', 'invisible');
	document.getElementById('first').setAttribute('class', 'visible');
	// document.getElementById('initial').disabled = true;
	// var element = document.getElementById('q1b1');
	// element.parentNode.removeChild(element);
	// var element = document.getElementById('q1b2');
	// element.parentNode.removeChild(element);
}

var darkq2 = function () {
	// $('#initial').slideUp(1000);
	// delete array[0];
	// delete array[3];
	// delete array[7];
	// delete array[8];
	// delete array[9];
	document.getElementById('first').setAttribute('class', 'invisible');
	document.getElementById('sixth').setAttribute('class', 'visible');
	// var element = document.getElementById('q1a1');
	// element.parentNode.removeChild(element);
	// var element = document.getElementById('q1a2');
	// element.parentNode.removeChild(element);
	// document.getElementById('first').style.width = "0";
	// document.getElementById('first').style.height = "0";
	// document.getElementById('sixth').style.width = "auto";
	// document.getElementById('sixth').style.height = "auto";
	// Off(first);
	// On(fourth);
}

var lightNYq3 = function () {
	// delete array[6];
	// delete array[7];
	// delete array[8];
	document.getElementById('fourth').setAttribute('class', 'invisible');
	document.getElementById('second').setAttribute('class', 'visible');
	// document.getElementById('fourth').style.width = "0";
	// document.getElementById('fourth').style.height = "0";
	// document.getElementById('second').style.width = "auto";
	// document.getElementById('second').style.height = "auto";
	// document.getElementById('first').disabled = true;
}

var lightLAq3 = function () {
	// delete array[0];
	// delete array[3];
	// delete array[0];
	document.getElementById('second').setAttribute('class', 'invisible');
	document.getElementById('fourth').setAttribute('class', 'visible');
	// document.getElementById('second').style.width = "0";
	// document.getElementById('second').style.height = "0";
	// document.getElementById('fourth').style.width = "auto";
	// document.getElementById('fourth').style.height = "auto";
	// document.getElementById("first").disabled;
}

var lightNYsingerq4 = function () {
	window.open("rewards/TS.html", replace = true);
}

var lightNYnotSingerq4 = function () {
	document.getElementById('third').setAttribute('class', 'visible');
}

var deletedEmails = function () {
	window.open("rewards/HC.html");
}

var notDeletedEmails = function () {
	window.open("rewards/DT.html");
} 

var lightLA30q4 = function () {
	document.getElementById('fifth').setAttribute('class', 'visible');
}

var Rita = function () {
	window.open("rewards/RO.html");
}

var AuntBecky = function () {
	window.open("rewards/Aunt.html");
}

var Fabio = function () {
	window.open("rewards/Fabio.html");
}

var darkSingerq2 = function () {
	document.getElementById('seventh').setAttribute('class', 'invisible');
	document.getElementById('eighth').setAttribute('class', 'visible');
}

var darkNotSingerq2 = function () {
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










// if (person == Rihanna) {
// 	var bec
//  		beckyIs=$('<img src="http://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2Fpbs.twimg.com%2Fmedia%2FByYImH5IEAA-3K5.jpg">');
//  	} else if (person ==="Rachel Roy") {
//  		beckyIs=$('<img src ="https://i.kinja-img.com/gawker-media/image/upload/dkao5pp3lx1bzu6wzwhy.jpg">');
//  	} else if (person ==="Rachel Ray") {
//  		beckyIs=$('<img src="http://starcasm.net/wp-content/uploads/2016/04/Rachel_Ray_Beyhive_Instagram_photo-490x330.jpg">');
//  	} else if (person ==="Donald Trump"){


// var nextQues1 = function() {
// 	var hColor = $('input[value="Light"]:checked').val();
// 	hColor ? lightq2(): darkq2();
// }




// $('#button1').submit(nextQues1(e){
// 	e.preventDefault();
// }

// $("#button1").click(function() {}

//     var self = this;
//     $('#toggleText').slideUp('fast', function() {
//          self.form.submit();
//     });
// });

// onclick="nextQues1()







// var hColor = $('input[value="Light"]:checked').val() 

// &! $('input[name="hColor"]:checked').val()

// var lives = $('input[name="lives"]:checked').val()

// var singer = $('input[name="singer"]:checked').val()

// var emails = $('input[name="emails"]:checked').val()

// var strip = $('input[name="strip"]:checked').val()

// var over30 = $('input[name="over30"]:checked').val()

// var celeb = $('input[name="celeb"]:checked').val()





// var lightVal = function() {
// 	console.log("WOWZA");
// 	var hColor = $('input[name="hColor"]').val();
// 	console.log(hColor);
// 	nextQues(hColor);
// }

// var darkVal = function() {
// 	console.log("OMGOMG");
// }

// var responseInitial = (hColor === "Light") ? true : false;
// console.log(responseInitial);


// if hColor === true  
// 	console.log("true")




// if responseInitial === true {

// }













// $(‘input[name='hColor']:checked’).val()


// var hColor = document.querySelector('#q1')



// if $(‘input[name='hColor']:checked’).val() === "Light" {
// 	console.log("It worked!");
// }

// <button onclick="nextQues()" id="ques1">Submit</button>

// var myVar = document.querySelector('#q1');

// myVar.onclick = function() {
// 	var num = Math.random();
// 	var imageNumber = Math.floor(num*20);
// 	var imageName = "images/" + imageNumber + ".png"
// 	myImage.setAttribute ('src', imageName);
// }



// var hcolor = "";
// var ny = "";
// var sing = "";
// var o30 = "";
// var dem = "";
// var cel = "";
// var strip = "";
// var i;
// var str = "";


// var taylorSwift =     [true, true, true, false, false, true, false];
// var donaldTrump =     [true, true, false, true, false, true, false ];
// var hillaryClinton =  [true, true, false, true, true, false, false];
// var auntBenty =       [true, false, false, true, false, false, false];
// var fabio =           [true, false, false, true, false, true, false];
// var ritaOra =         [false, false, true, true, false, true, false];
// var rachelRay =       [false, false, false, true, false, true, false];
// var rachelRoy =       [false, true, false, true, false, false, false];
// var mya =             [false, true, true, true, false, true, true ];
// var rihana =          [false, false, true, true, false, true, false];
// var misteryPerson =   [false, false, false, false, false, false, false];


// function getAnswer(n,i){
//   i = i-1;
//   misteryPerson[i] = (n === 1) ? 1 : 0;
  
// }




// misteryPerson[0] = (hcolor === Light) ? true : false



// misteryPerson[1] = (ny === Light) ? true : false


// if document.getElementById("#initial") === true {
// }//html click event

// $(‘input[name='question1a']:checked’).val()