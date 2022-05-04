const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

let step = 0;
sliderArrowPrev.onclick = function() {
	console.log(step);
	step--;
	if(step < 0) {
		step = slider.length;
	}
}
sliderArrowNext.onclick = function() {
	console.log(step);
	step++;
	if(step == slider.length + 1) {
		step = 0;
	}
}

const slides = document.querySelectorAll('.slider__item');
let slider = Array.from(slides);

// console.log(slider.indexOf(document.querySelector('.slider__item_active')));
step = slider.indexOf(document.querySelector('.slider__item_active'));
console.log(step);