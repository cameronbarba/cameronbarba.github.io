var i = 0;
var text = "My name is Cameron Barba. I'm a Chicano developer, designer and writer based out of California. I'm a member of HOUND alongside some dope humans.";
var textTwo = "Currently: studying Computer Science @ OSU."
var speed = 50;

function typeText (){
	if (i < text.length)
	{
		document.getElementById("typeText").innerHTML += text.charAt(i);
		i++;
		setTimeout(typeText, speed);
	}
	
}

function typeTextTwo()
{
	if (i < textTwo.length)
	{
		document.getElementById("typeText").innerHTML += textTwo.charAt(i);
		i++
		setTimeout(typeTextTwo, speed);
	}
	document.getElementById("typeText").innerHTML += <br><br>;
	
}

typeText();
typeTextTwo();

// pseudeocode
// I need to make an array or probab
