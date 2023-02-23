// MENU

let burger = document.querySelector('.menu-list__burger'),
	menu = document.querySelector('.menu-list__items'),
	main = document.querySelector('main');

burger.addEventListener('click', () => {
	burger.classList.toggle('open')
	})

menu.addEventListener('click', () => {
	if (burger.classList.contains('open')) {
			burger.classList.remove('open')
		}
	})

main.addEventListener('click', () => {
	if (burger.classList.contains('open')) {
			burger.classList.remove('open')
		}
})

window.addEventListener('scroll', () => {
	if (burger.classList.contains('open')) {
			burger.classList.remove('open')
		}
})


// FILTER

let filtersChosen = document.querySelectorAll('.filters__item'),
	cards = document.querySelectorAll('.card'),
	garden = document.querySelectorAll('.garden'),
	planting = document.querySelectorAll('.planting'),
	lawn = document.querySelectorAll('.lawn');

filtersChosen.forEach(filter =>
	filter.addEventListener('click', () => {
		if (filter.classList.contains('filter-chosen')) {
			filter.classList.remove('filter-chosen');
		} else if (filtersChosen[1].classList.contains('filter-chosen') && filtersChosen[2].classList.contains('filter-chosen') ||
			filtersChosen[0].classList.contains('filter-chosen') && filtersChosen[2].classList.contains('filter-chosen') ||
			filtersChosen[0].classList.contains('filter-chosen') && filtersChosen[1].classList.contains('filter-chosen')) {
			alert("Attention! Only two filters can be used at the same time.")
		} else {
			filter.classList.add('filter-chosen');
		};
		cards.forEach(card => {
			if (filtersChosen[0].classList.contains('filter-chosen') ||
				filtersChosen[1].classList.contains('filter-chosen') ||
				filtersChosen[2].classList.contains('filter-chosen')) {
				card.classList.add('blur')
			} else {
				card.classList.remove('blur')
			}
		});
		garden.forEach(card => {
			if (filtersChosen[0].classList.contains('filter-chosen')) {
				garden.forEach(card => {
					card.classList.remove('blur')
				})
			}
		});
		lawn.forEach(card => {
			if (filtersChosen[1].classList.contains('filter-chosen')) {
				lawn.forEach(card => {
					card.classList.remove('blur')
				})
			}
		});
		planting.forEach(card => {
			if  (filtersChosen[2].classList.contains('filter-chosen')) {
				planting.forEach(card => {
					card.classList.remove('blur')
				})
			}
		});
	}));


// ACCOURDION

let dropdowns = document.querySelectorAll('.accourdion-dropdown'),
	accourdions = document.querySelectorAll('.price-accourdion');

dropdowns[0].addEventListener('click', () => {
		if (accourdions[0].classList.contains('accourdion-opened')) {
			accourdions[0].classList.remove('accourdion-opened')
		} else {accourdions[0].classList.add('accourdion-opened');
			accourdions[1].classList.remove('accourdion-opened');
			accourdions[2].classList.remove('accourdion-opened') }
});

dropdowns[1].addEventListener('click', () => {
		if (accourdions[1].classList.contains('accourdion-opened')) {
			accourdions[1].classList.remove('accourdion-opened')
		} else {accourdions[1].classList.add('accourdion-opened');
			accourdions[0].classList.remove('accourdion-opened');
			accourdions[2].classList.remove('accourdion-opened') }
});

dropdowns[2].addEventListener('click', () => {
		if (accourdions[2].classList.contains('accourdion-opened')) {
			accourdions[2].classList.remove('accourdion-opened')
		} else {accourdions[2].classList.add('accourdion-opened');
			accourdions[0].classList.remove('accourdion-opened');
			accourdions[1].classList.remove('accourdion-opened') }
});


// SELECT

let selectDropdown = document.querySelector('.select__dropdown'),
	selectButton = document.querySelector('.select__button'),
	selectItems = document.querySelectorAll('.select__item'),
	addressCard = document.querySelector('.address-card'),
	cardCity = document.querySelector('.address-card__city'),
	cardPhone = document.querySelector('.address-card__phone'),
	cardStreet = document.querySelector('.address-card__street'),
	cardButton = document.querySelector('.address-card__button'),
	contactsPicture = document.querySelector('.contacts__picture');

selectDropdown.addEventListener('click', () => {
	selectDropdown.classList.toggle('dropup');
	if ((selectButton.innerText === 'City')) {
		contactsPicture.classList.toggle('contacts__picture-remove')
	};
});

selectItems.forEach(item => {
	item.addEventListener('click', () => {
		selectButton.innerText = item.innerText;
		selectDropdown.classList.remove('dropup');
		if (selectButton.innerText === 'City') {
			selectButton.classList.remove('selected__button');
		} else {
			selectButton.classList.add('selected__button');
			addressCard.classList.add('address-card-visible');
			contactsPicture.classList.add('contacts__picture-remove')
		};
		if (selectButton.innerText === 'Yonkers, NY') {
			cardCity.innerText = selectButton.innerText;
			cardPhone.innerText = '+1	914	678 0003';
			cardStreet.innerText = '511 Warburton Ave';
			cardButton.setAttribute('href', 'tel:'+cardPhone.innerText.replaceAll(' ', ''))
		} else if (selectButton.innerText === 'Canandaigua, NY') {
			cardCity.innerText = selectButton.innerText;
			cardPhone.innerText = '+1	585	393 0001';
			cardStreet.innerText = '151 Charlotte Street';
			cardButton.setAttribute('href', 'tel:'+cardPhone.innerText.replaceAll(' ', ''))
		} else if (selectButton.innerText === 'Sherrill, NY') {
			cardCity.innerText = selectButton.innerText;
			cardPhone.innerText = '+1	315	908 0004';
			cardStreet.innerText = '14 WEST Noyes BLVD';
			cardButton.setAttribute('href', 'tel:'+cardPhone.innerText.replaceAll(' ', ''))
		} else if (selectButton.innerText === 'New York City') {
			cardCity.innerText = selectButton.innerText;
			cardPhone.innerText = '+1	212	456 0002';
			cardStreet.innerText = '9 East 91st Street';
			cardButton.setAttribute('href', 'tel:'+cardPhone.innerText.replaceAll(' ', ''))
		};
	})
});