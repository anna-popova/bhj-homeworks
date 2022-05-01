let deadMoleCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
	let hole = getHole(i);
	console.log(hole);

	hole.onclick = function() {
		if( hole.className.includes('hole_has-mole' )) {
			deadMoleCounter.textContent = +deadMoleCounter.textContent + 1;
		} else {
			lostCounter.textContent = +lostCounter.textContent + 1;
		}


		//почему сперва появляется alert Победа! или Вы проиграли, и только потом 
		//значение соответствующего счетчика показывает 5 или 10 ? 
		//как это исправть?
		if(deadMoleCounter.textContent == 5) {
			alert('Победа!');
			deadMoleCounter.textContent = 0;
			lostCounter.textContent = 0;
		}
	
		if(lostCounter.textContent == 10) {
			alert('Вы проиграли');
			deadMoleCounter.textContent = 0;
			lostCounter.textContent = 0;
		}
	}
}