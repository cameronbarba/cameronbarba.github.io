var i = 0;
var text = "My name is Cameron Barba./n/n I'm a Chicano developer, designer and writer based out of California./n I'm a member of HOUND alongside some dope humans.'";
var speed = 50;

function typeText (){
	if (i < text.length)
	{
		document.getElementById("typeText").innerHTML += text.charAt(i);
		i++;
		setTimeout(typeText, speed);
	}
}

typeText();

// pseudeocode
// I need to make an array or probab
