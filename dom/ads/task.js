const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
console.log(rotatorCases);

function toggleClass() {
	rotatorCases.forEach(elem => {
		elem.classList.toggle('rotator__case_active');
	})
}

// toggleClass();

setInterval(toggleClass, 1000);