const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliders = document.querySelectorAll('.slider__item');
const lastIndex = sliders.length - 1;

let step = 0;
sliderArrowPrev.onclick = function() {
	if (step <= 0) {
		step = lastIndex;
	} else {
		step--;
	}

	setActiveImage(step);
}

sliderArrowNext.onclick = function() {
	if (step === lastIndex) {
		step = 0;
	} else {
		step++;
	}

	setActiveImage(step);
}

setActiveImage = function(step) {
	for (let i = 0; i < sliders.length; i++) {
		const slide = sliders[i];
		slide.classList.remove("slider__item_active");
	}
		sliders[step].classList.add("slider__item_active");
}