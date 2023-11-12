import { Fancybox } from "@fancyapps/ui";

/* Видео в разделе о походе */
document.querySelector('.about__play').addEventListener('click', () => {
	Fancybox.show([
		{
			src: "https://www.youtube.com/watch?v=IsD9VvPB0Ak&ab_channel=MYUSATRAVELS",
			type: "video",
		},
	]);
})

/* Галерея */
const galleryItems = document.querySelectorAll('.grid-gallery__zoom');

galleryItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (+item.dataset.index === index) {
			Fancybox.show([
				{
					src: `img/full${index + 1}.jpg`,
					type: "image",
				},
			]);
		}
	})
})
