var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i<= 5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + i + ".jpg");
  newImage.onclick =  function(e){ 
	  displayedImage.src = e.target.src;
  }
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
function darkenOrLighten()
{
	//alert("w");
	var txt = btn.innerHTML;
	console.log(txt);
	if (txt == "Darken"){
		displayedImage.style.opacity = 0.7;
		btn.innerHTML = "Lighten";
	}else if(txt == "Lighten"){
		displayedImage.style.opacity = 1.0;
		btn.innerHTML = "Darken";
	}
}
btn.addEventListener('click',darkenOrLighten);
