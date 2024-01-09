import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import Pagination from 'https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs'

const breakpoint = window.matchMedia('(min-width: 768px)')
const slider = document.querySelector('.brands-slider')
const sliderWrapper = document.querySelector('.brands-slider__wrapper')
const slides = document.querySelectorAll('.brand-card')
const pagination = document.querySelector('.brands-slider__pagination')
let swiper

function initSwiperStyles() {
	slider.classList.add('swiper')
	sliderWrapper.classList.add('swiper-wrapper')
	slides.forEach(slide => slide.classList.add('swiper-slide'))
	pagination.classList.add('swiper-pagination')
	pagination.style.display = 'block'
}

function removeSwiperStyles() {
	slider.classList.remove('swiper')
	sliderWrapper.classList.remove('swiper-wrapper')
	slides.forEach(slide => slide.classList.remove('swiper-slide'))
	pagination.classList.remove('swiper-pagination')
	pagination.style.display = 'none'
}

function initSwiper() {
	swiper = new Swiper('.swiper', {
		modules: [Pagination],
		mousewheel: {
			forceToAxis: true,
		},
		slidesPerView: 1.4,
		centeredSlides: false,
		grabCursor: true,
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		speed: 400,
		spaceBetween: 16,
	})

	swiper.init()
}

function destroySwiper() {
	swiper.destroy(true, true)
	swiper = undefined
}

window.addEventListener('resize', e => {
	const windowWidth = window.innerWidth

	if (windowWidth >= 768 && swiper) {
		destroySwiper()
		removeSwiperStyles()
		return
	}

	if (windowWidth < 768 && !swiper) {
		initSwiperStyles()
		initSwiper()
		return
	}

	if (windowWidth < 768 && swiper) {
		return
	}
})

if (!breakpoint.matches) {
	initSwiperStyles()
	initSwiper()
}
