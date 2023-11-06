const blocks = document.querySelectorAll('[data-animation]');

const appearanceSection = function (entries, observer) {
	entries.forEach(entry => {

		if (!entry.isIntersecting) return
		entry.target.classList.remove('left-appearance');

		const childrens = entry.target.children;
		setTimeout(() => {
			for (let item of childrens) {
				if (item.hasAttribute('data-animate')) {
					for (let child of item.children) {
						if (child.hasAttribute('blog')) {
							child.classList.remove('appearance-block4')
							child.classList.remove('appearance-block5')
						}
						if (child.hasAttribute('destinations')) {
							child.classList.remove('left-appearance-block')
							child.classList.remove('left-appearance-block2')
							child.classList.remove('left-appearance-block3')
						}
					}
				}
			}
		}, 200)

		observer.unobserve(entry.target);
	})
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
	root: null,
	threshold: 0.25,
});

blocks.forEach(block => {
	sectionObserver.observe(block);
	block.classList.add('left-appearance');
});
