// smooth scroll for header
const headerElement = document.querySelector('.header');
const callback = function (entries, observer) {
	if (entries[0].isIntersecting) {
		headerElement.classList.remove('_scroll');
	} else {
		headerElement.classList.add('_scroll');
	}
};

//menu-burger
const menuBurger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

menuBurger.addEventListener('click', function(){
	if (menuBody.classList.contains('_active')){
	menuBurger.classList.remove('_active');
	menuBody.classList.remove('_active');	
	document.body.style.cssText = '';
	} else{
	menuBurger.classList.add('_active');
	menuBody.classList.add('_active');	
	document.body.style.cssText = `overflow: hidden`;
	}
})

// const spoilerMenu = document.querySelector('.menu__sub-list')
// function spoilerOff(){
// if (menuBurger.classList.contains('_active')){
// spoilerMenu.style.cssText = `display: none`;
// console.log(spoilerMenu);
// console.log(menuBurger);
// }
// } spoilerOff()

//menu-burger
// const iconMenu = document.querySelector(".icon-menu");
// if (iconMenu != null) {
// 	let delay = 500;
// 	let menuBody = document.querySelector(".menu__body");
// 	iconMenu.addEventListener("click", function (e) {
// 		if (unlock) {
// 			body_lock(delay);
// 			iconMenu.classList.toggle("_active");
// 			menuBody.classList.toggle("_active");
// 		}
// 	});
// };
// function menu_close() {
// 	let iconMenu = document.querySelector(".icon-menu");
// 	let menuBody = document.querySelector(".menu__body");
// 	iconMenu.classList.remove("_active");
// 	menuBody.classList.remove("_active");
// } 


//for bodyLock (block scroll)
// function body_lock(delay) {
// 	let body = document.querySelector("body");
// 	if (body.classList.contains('_lock')) {
// 		body_lock_remove(delay);
// 	} else {
// 		body_lock_add(delay);
// 	}
// }
// function body_lock_remove(delay) {
// 	let body = document.querySelector("body");
// 	if (unlock) {
// 		let lock_padding = document.querySelectorAll("._lp");
// 		setTimeout(() => {
// 			for (let index = 0; index < lock_padding.length; index++) {
// 				const el = lock_padding[index];
// 				el.style.paddingRight = '0px';
// 			}
// 			body.style.paddingRight = '0px';
// 			body.classList.remove("_lock");
// 		}, delay);

// 		unlock = false;
// 		setTimeout(function () {
// 			unlock = true;
// 		}, delay);
// 	}
// }
window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

// let unlock = true;

// function body_lock_add(delay) {
// 	let body = document.querySelector("body");
// 	if (unlock) {
// 		let lock_padding = document.querySelectorAll("._lp");
// 		for (let index = 0; index < lock_padding.length; index++) {
// 			const el = lock_padding[index];
// 			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 		}
// 		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 		body.classList.add("_lock");

// 		unlock = false;
// 		setTimeout(function () {
// 			unlock = true;
// 		}, delay);
// 	}
// }

// check menu links
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});
// }

// function onMenuLinkClick(e) {
// 	const menuLink = e.target;
// 	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 		const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

// 		if (iconMenu.classList.contains('_active')) {
// 			document.body.classList.remove('_lock');
// 			iconMenu.classList.remove('_active');
// 			menuBody.classList.remove('_active');
// 		}
// 	}
// }

// for image format
function testWebP(callback) {
var webP = new Image();
webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
if (support === true) {
	document.querySelector('html').classList.add('_webp');
} else {
	document.querySelector('html').classList.add('_no-webp');
}
});

// actions on hash
if (location.hash) {
const hsh = location.hash.replace('#', '');
if (document.querySelector('.popup_' + hsh)) {
	popup_open(hsh);
} else if (document.querySelector('div.' + hsh)) {
	_goto(document.querySelector('.' + hsh), 500, '');
}
}

//wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}

//is hidden check
function _is_hidden(el) {
	return (el.offsetParent === null)
}

//for quick remove classes
function removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
}}

//for tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}

// general spoiler
const spoilersArray = document.querySelectorAll('[data-spoilers]');
		// Получение обычных слойлеров
		const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
			return !item.dataset.spoilers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spoilersRegular.length > 0) {
			initSpoilers(spoilersRegular);
		}

		// Получение слойлеров с медиа запросами
		const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
			return item.dataset.spoilers.split(",")[0];
		});

		// Инициализация слойлеров с медиа запросами
			const breakpointsArray = [];
			spoilersMedia.forEach(item => {
				const params = item.dataset.spoilers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});

			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});

			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
			});
		// Инициализация
		function initSpoilers(spoilersArray, matchMedia = false) {
			spoilersArray.forEach(spoilersBlock => {
				spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
				if (matchMedia.matches || !matchMedia) {
					spoilersBlock.classList.add('_init');
					initSpoilerBody(spoilersBlock);
					spoilersBlock.addEventListener("click", setSpoilerAction);
				} else {
					spoilersBlock.classList.remove('_init');
					initSpoilerBody(spoilersBlock, false);
					spoilersBlock.removeEventListener("click", setSpoilerAction);
				}
			});
		}
		