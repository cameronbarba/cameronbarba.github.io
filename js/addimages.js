const images = ["compressedImages/image1.JPG",
				"compressedImages/image2.jpeg",
				"compressedImages/image3.jpeg",
				"compressedImages/image4.JPG",
				"compressedImages/image5.jpeg",
				"compressedImages/image6.JPG",
				"compressedImages/image7.JPG",
				"compressedImages/image8.JPG",
				"compressedImages/image9.JPG",
				"compressedImages/image10.JPG",
				"compressedImages/image11.JPG",
				"compressedImages/image12.JPG",
				"compressedImages/image13.JPG"]

let i = 0;
// var timer = setInterval(fadeImage, 3000);

/********************************************************************
** Description: Function to create a new img element at mouse click x and y 
** coordinates that will be passed as parameters. 
********************************************************************/

function placeImage(x, y) {
  var nextSrc = images[i]
  
  var img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")
  
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.width = "20%";
  img.style.height = "auto"
  
  
  document.body.appendChild(img)
  
  i = i + 1
  if (i >= images.length) {
    i = 0
  }

}





/********************************************************************
** Description: Create a function to fade the opacity from 1 to 0 
** over span of a few seconds (probably 3s will do)
********************************************************************/

// function fadeImage()
// {
// 	img.style.opacity = "1";
// 	var id = setInterval(fade, 5);
// 	function frame ()
// 	{
// 	if (opacity == 0)
// 	{
// 		clearInterval(id);

// 	}
// 	else 
// 	{
// 		img.style.opacity -= .1
// 	}
	
// 	}
// }

/********************************************************************
** event listeners for click and touch to call function
********************************************************************/

document.addEventListener("click", function (event) {
  placeImage(event.pageX, event.pageY);
 	
 })


document.addEventListener("touchend", function (event) {
  placeImage(event.pageX, event.pageY)
})

