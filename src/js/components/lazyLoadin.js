const images = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
	const entry = entries[0];
	if (!entry.isIntersecting) return
	entry.target.srcset = entry.target.dataset.src;
	// entry.target.addEventListener('load', () => entry.target.classList.remove('lazy-img')); // тк мб плохой интернет, тогда хорошее изображение не успеет подгрузиться
	observer.unobserve(entry.target);
};

const lazyObserver = new IntersectionObserver(loadImg, { //сам observer
	root: null,
	threshold: 0.1,
});

images.forEach(img => lazyObserver.observe(img)); //слежка за img
