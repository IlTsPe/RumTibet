const showMoreBlock = document.querySelectorAll('.card-blog__footer');

const toggleStatus = (elem, targetElem, selector) => {
	elem.previousElementSibling.classList.toggle(selector);

	if (elem.previousElementSibling.classList.contains(selector)) {
		targetElem.textContent = 'читать полностью'
		targetElem.classList.remove('opened-content')
	} else {
		targetElem.textContent = 'скрыть';
		targetElem.classList.add('opened-content')
	}
}

showMoreBlock.forEach(block => {
	block.lastElementChild.addEventListener('click', (e) => {
		const target = e.target;
		toggleStatus(block, target, 'decrease-text--row-4');
	});
});
