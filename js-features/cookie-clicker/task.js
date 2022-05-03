const clickCounter = document.getElementById('clicker__counter');

const cookieImg = document.getElementById('cookie');

cookieImg.onclick = function() {

	if(cookieImg.width == 200) {
		cookieImg.width = 300;
	} else {
		cookieImg.width = 200
	}

	clickCounter.textContent = +clickCounter.textContent + 1;
}