import './slider.js'

const loadBtns = document.querySelectorAll('.load-btn')
const height = {
	brandsHeight: 0,
	servicesHeight: 0,
}

function showMoreItems(e) {
	const btn = e.currentTarget
	const btnIcon = btn.querySelector('.load-btn__icon')
	const btnText = btn.querySelector('.load-btn__text')
	const id = btn.id
	const wrapper = [...btn.parentNode.children].find(
		el => el.id === `${id}-section`
	)

	height[`${id}Height`] = wrapper.clientHeight

	btn.classList.add('active')
	wrapper.style.overflowY = 'visible'
	wrapper.style.height = 'fit-content'

	btnText.textContent = 'Скрыть'
	btnIcon.style.backgroundImage = "url('./../assets/images/icons/arrow-up.svg')"
}

function hideItems(e) {
	const btn = e.currentTarget
	const btnIcon = btn.querySelector('.load-btn__icon')
	const btnText = btn.querySelector('.load-btn__text')
	const id = btn.id
	const wrapper = [...btn.parentNode.children].find(
		el => el.id === `${id}-section`
	)
	const defaultHeight = height[`${id}Height`]

	btn.classList.remove('active')
	wrapper.style.overflowY = 'hidden'
	wrapper.style.height = `${defaultHeight}px`

	btnText.textContent = btnText.dataset.defaultText
	btnIcon.style.backgroundImage =
		"url('./../assets/images/icons/arrow-down.svg')"
}

loadBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		// debugger
		if (btn.classList.contains('active')) {
			hideItems(e)
			return
		}

		if (!btn.classList.contains('active')) {
			showMoreItems(e)
			return
		}
	})
})
