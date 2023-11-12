const showMoreBlock = document.querySelectorAll('.card-blog__footer');

(function () {
	const blogText = document.querySelectorAll('.card-blog__text');
	blogText.forEach(item => {
		if (item.textContent.length < 240) {
			const showMoreButton = item.closest('.card-blog__info')
				.querySelector('.card-blog__footer')
				.querySelector('button');

			if (!showMoreButton) return

			showMoreButton.classList.add('card-blog__btn--disabled');
			showMoreButton.setAttribute('disabled', true);
		};
	});
}());

const toggleStatus = (elem, targetElem, selector) => {
	elem.previousElementSibling.classList.toggle(selector);

	if (elem.previousElementSibling.classList.contains(selector)) {
		targetElem.textContent = 'читать полностью';
		targetElem.classList.remove('opened-content');
	} else {
		targetElem.textContent = 'скрыть';
		targetElem.classList.add('opened-content');
	}
}

showMoreBlock.forEach(block => {
	block.lastElementChild.addEventListener('click', (e) => {
		const target = e.target;
		toggleStatus(block, target, 'decrease-text--row-4');
	});
});
