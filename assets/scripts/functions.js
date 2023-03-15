function pastEvents (arrayEntrada, date){
	const eventsOfThePast=[];
	arrayEntrada.forEach(event =>{
		if (event.date<date){
			eventsOfThePast.push(event)
		}
	})
	return eventsOfThePast;
}

function upcomingEvents (arrayEntrada, date){
	const eventsToCome=[];
	arrayEntrada.forEach(event =>{
		if (event.date>date){
			eventsToCome.push(event)
		}
	})
	return eventsToCome;
}

function cardsMakerII(array,container){
	let fragment = document.createDocumentFragment();
	array.forEach(event => {
		let card = document.createElement("div");
		card.innerHTML=`<div class="card d-flex">
					<img src=${event.image} class="card-img-top" alt="event">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title">${event.name}</h5>
						<p class="card-text flex-grow-1">${event.description}</p>
						<p class="price card-text">Price:${event.price}</p>
						<a href="./pages/details.html" class="btn btn-primary me-auto">view details</a>
					</div>
				</div>`;
		fragment.appendChild(card);
	})
	return container.appendChild(fragment);
}

function settingCategoryCheckBoxes(array) {
	let category = array.map(event => event.category);
	let setCategory = new Set(category);
	let arrayCategory = Array.from(setCategory);
	const checksCategories = document.getElementById('category_checks');
	let fragment = document.createDocumentFragment();
	arrayCategory.forEach((category)=>{
		let check = document.createElement("label");
		check.classList = 'col-12 col-md';
		check.htmlFor = `'${category.toLowerCase()}'`;
		check.innerHTML = `<input type="checkbox" name="${category.toLowerCase()}" id="${category.toLowerCase()}" value="${category.toLowerCase()}">${category}`;
		fragment.appendChild(check);
	})
	return checksCategories.insertBefore(fragment,search);
}

//function categoryChecks(array,container){
	
	
//}


// function cardsMaker(array,targetClass){
// 	const placeOfCards = document.getElementById(targetClass);
// 	let cards = '';
// 	for(event of array){
// 		cards = cards + `<div class="card d-flex">
// 					<img src=${event.image} class="card-img-top" alt="event">
// 					<div class="card-body d-flex flex-column">
// 						<h5 class="card-title">${event.name}</h5>
// 						<p class="card-text flex-grow-1">${event.description}</p>
// 						<p class="price card-text">Price:${event.price}</p>
// 						<a href="./pages/details.html" class="btn btn-primary me-auto">view details</a>
// 					</div>
// 				</div>`
// 	}
// 	return placeOfCards.innerHTML = cards;
// }

export {
	cardsMakerII,
	//cardsMaker,
	upcomingEvents,
	pastEvents,
	settingCategoryCheckBoxes
	//categoryChecks
}